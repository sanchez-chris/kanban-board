import { test, expect } from '@playwright/test';

test('ad new task', async ({ page }) => {
    await page.goto('http://localhost:5173'); 

    await page.getByTestId('input-title').fill('title');
    await page.getByTestId('description-title').fill('description');

    await page.getByTestId('add-task-button').click();
    const taskCount = await page.getByTestId('task').count(); 

    expect(taskCount).toBe(2);;

});

test('delete a task', async ({ page }) => {
    await page.goto('http://localhost:5173'); 
    await page.getByTestId('delete-task-button').click();
    await expect(page.getByTestId('task')).not.toBeVisible();
});
