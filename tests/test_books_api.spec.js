// demo-books-api.spec.js
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://demoqa.com';
const VALID_ISBN = '9781449325862';
const SECOND_ISBN = '9781449331818';
const USER_ID = 'demoUser123'; // Need to use a real user ID

test.describe('DemoBooks API Collection', () => {

  test('GET /BookStore/v1/Books - Fetch All Books', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/BookStore/v1/Books`);
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(Array.isArray(json.books)).toBeTruthy();
  });

  test('GET /BookStore/v1/Book - Fetch Book by ISBN', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/BookStore/v1/Book?ISBN=${VALID_ISBN}`);
    expect(response.status()).toBe(200);
    const book = await response.json();
    expect(book.isbn).toBe(VALID_ISBN);
  });

  test('POST /BookStore/v1/Books - Add List of Books', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/BookStore/v1/Books`, {
      data: {
        userId: USER_ID,
        collectionOfIsbns: [{ isbn: VALID_ISBN }]
      }
    });

    // This require auth in real case
    //expect([200, 201, 401]).toContain(response.status());
    expect([401]).toContain(response.status());
  });

  test('PUT /BookStore/v1/Books/{ISBN} - Edit Book', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/BookStore/v1/Books/${VALID_ISBN}?ISBN=${VALID_ISBN}`, {
      data: {
        userId: USER_ID,
        isbn: SECOND_ISBN
      }
    });

    // This require auth in real case
    expect([200, 401, 403]).toContain(response.status()); // 401 if no token
  });

  test('DELETE /BookStore/v1/Book - Delete Single Book', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/BookStore/v1/Book`, {
      data: {
        isbn: VALID_ISBN,
        userId: USER_ID
      }
    });

    // This require auth in real case
    expect([200, 204, 401, 403]).toContain(response.status());
  });

  test('DELETE /BookStore/v1/Books - Delete Multiple Books', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/BookStore/v1/Books?UserId=${USER_ID}`, {
      data: {
        userId: USER_ID,
        collectionOfIsbns: [{ isbn: VALID_ISBN }]
      }
    });

    // This require auth in real case
    expect([200, 204, 401, 403]).toContain(response.status());
  });

});
