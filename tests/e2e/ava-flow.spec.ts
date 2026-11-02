import { test, expect } from '@playwright/test';

test.describe('Fluxo Principal do AVA (E2E)', () => {
  test('O aluno deve visualizar o curso, acessar o livro digital, o infográfico e realizar a avaliação no Dashboard', async ({ page }) => {
    // 1. Acesso à página principal do Dashboard
    await page.goto('/');

    // 2. Verifica título do curso e vídeo
    await expect(
      page.locator('h1', { hasText: 'Compreensão e revisão de código gerado por IA' })
    ).toBeVisible();
    await expect(page.locator('iframe')).toBeVisible();

    // 3. Verifica a seção de Material Complementar e o link do Livro Digital (FlipHTML5)
    await expect(page.locator('h2', { hasText: 'Material Complementar' })).toBeVisible();
    const linkLivro = page.locator('a', { hasText: 'Acessar Livro' });
    await expect(linkLivro).toBeVisible();
    await expect(linkLivro).toHaveAttribute(
      'href',
      'https://online.fliphtml5.com/anderson_filho/zwqy/'
    );
    await expect(linkLivro).toHaveAttribute('target', '_blank');

    // 4. Verifica o Infográfico (card, link para o PDF e imagem renderizada)
    await expect(
      page.locator('h3', { hasText: 'Infográfico: Checklist Final de Aprovação' })
    ).toBeVisible();
    const linkInfografico = page.locator('a', { hasText: 'Abrir Infográfico (PDF)' });
    await expect(linkInfografico).toBeVisible();
    await expect(linkInfografico).toHaveAttribute('href', '/infografico.pdf');
    await expect(linkInfografico).toHaveAttribute('target', '_blank');

    const imgInfografico = page.locator('img[alt="Infográfico: Checklist Final de Aprovação"]');
    await expect(imgInfografico).toBeVisible();
    await expect(imgInfografico).toHaveAttribute('src', '/infografico.png');

    // 5. Verifica seção de Resumo dos tópicos
    await expect(page.locator('h2', { hasText: 'Resumo dos tópicos' })).toBeVisible();

    // 6. Verifica que a Avaliação de Conhecimento pode ser iniciada
    const botaoIniciar = page.locator('button', { hasText: 'Iniciar Avaliação' });
    await expect(botaoIniciar).toBeVisible();
    await botaoIniciar.click();

    await expect(page.locator('text=Questão 1 de 8')).toBeVisible();
  });
});


