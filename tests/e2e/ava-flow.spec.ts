import { test, expect } from '@playwright/test';

test.describe('Fluxo Principal do AVA (E2E)', () => {
  test('O aluno deve conseguir fazer login, ver o dashboard e completar um exercício', async ({ page }) => {
    // 1. Acesso à página inicial que redireciona para login
    await page.goto('/login');
    
    // 2. Preenchimento do formulário de login (Mockado)
    await page.fill('input[type="email"]', 'aluno@vibe.com');
    await page.fill('input[type="password"]', '123456');
    await page.click('button[type="submit"]');

    // 3. Verifica redirecionamento e Dashboard
    // Assumindo que a rota inicial '/' exibe os cursos
    await expect(page.locator('h1', { hasText: 'Meus Cursos' })).toBeVisible();
    await expect(page.locator('text=Introdução ao TypeScript')).toBeVisible();

    // 4. Acessar uma aula específica (Ex: ID 1)
    await page.click('text=Continuar aula');

    // 5. Verifica se a página de aula carregou corretamente
    await expect(page.locator('h1', { hasText: 'Introdução ao Next.js e React' })).toBeVisible();
    
    // Verifica se o vídeo carregou (O Iframe)
    await expect(page.locator('iframe')).toBeVisible();

    // 6. Tentar resolver o exercício
    await expect(page.locator('h2', { hasText: 'Exercício de Fixação' })).toBeVisible();
    
    // Clica na resposta correta (A opção 1 baseada no índice do mock)
    await page.click('text=Ele permite renderização do lado do servidor (SSR) nativamente');
    
    // Submeter a resposta
    await page.click('button', { hasText: 'Enviar Resposta' });

    // 7. Validar o feedback de sucesso
    await expect(page.locator('text=Resposta Correta! Progresso salvo.')).toBeVisible();
  });
});
