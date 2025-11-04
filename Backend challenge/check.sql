/*2.1 Consulta com Agregação:

id (INT)
product (VARCHAR)
quantity (INT)
price (DECIMAL)
*/

-- Receita total por produto (quantity * price), em ordem decrescente

SELECT
  product,
  SUM(quantity * price) AS total_revenue
FROM sales
GROUP BY product
ORDER BY total_revenue DESC;

/*2.2 Identificar Registros Duplicados:

id (INT)
email (VARCHAR)
name (VARCHAR)
*/

-- E-mails duplicados e número de ocorrências
SELECT
  email,
  COUNT(*) AS occurrences
FROM users
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY occurrences DESC, email;

/*2.3 Atualizar Dados Condicionalmente:

id (INT)
name (VARCHAR)
salary (DECIMAL)
*/

-- Aumenta em 10% apenas salários < 5000
UPDATE employees
SET salary = salary * 1.10
WHERE salary < 5000;

/*2.4 Consulta com JOIN Simples:

Dadas as tabelas: orders

id (INT)
customer_id (INT)
total (DECIMAL)
customers

id (INT)
name (VARCHAR)
country (VARCHAR)
*/

-- Nome do cliente + total de compras, apenas quem realizou compras
SELECT
  c.name AS customer_name,
  SUM(o.total) AS total_spent
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
HAVING SUM(o.total) > 0
ORDER BY total_spent DESC;

/*2.5 Consulta com JOIN e Filtragem:

products

id (INT)
name (VARCHAR)
category_id (INT)
categories

id (INT)
name (VARCHAR)
sales

id (INT)
product_id (INT)
quantity (INT)
*/

-- Categoria, Produto e quantidade total vendida por produto,
-- filtrando apenas categorias com mais de 100 unidades vendidas no total
WITH product_sales AS (
  SELECT
    p.id AS product_id,
    p.name AS product_name,
    p.category_id,
    SUM(s.quantity) AS total_qty
  FROM products p
  JOIN sales s ON s.product_id = p.id
  GROUP BY p.id, p.name, p.category_id
),
category_totals AS (
  SELECT
    c.id AS category_id,
    c.name AS category_name,
    SUM(ps.total_qty) AS category_qty
  FROM categories c
  JOIN product_sales ps ON ps.category_id = c.id
  GROUP BY c.id, c.name
  HAVING SUM(ps.total_qty) > 100
)
SELECT
  ct.category_name,
  ps.product_name,
  ps.total_qty
FROM product_sales ps
JOIN category_totals ct ON ct.category_id = ps.category_id
ORDER BY ct.category_name, ps.total_qty DESC, ps.product_name;

/*2.6 Criação e Consulta de uma VIEW:

transactions

id (INT)
account_id (INT)
transaction_date (DATE)
amount (DECIMAL)
*/

-- Cria view monthly_summary com total por account_id e mês

CREATE OR REPLACE VIEW monthly_summary AS
SELECT
  account_id,
  date_trunc('month', transaction_date)::date AS month,
  SUM(amount) AS monthly_amount
FROM transactions
GROUP BY account_id, date_trunc('month', transaction_date)::date;

-- Listar resumos mensais apenas para contas com algum mês > 10000
SELECT ms.*
FROM monthly_summary ms
WHERE ms.account_id IN (
  SELECT account_id
  FROM monthly_summary
  WHERE monthly_amount > 10000
  GROUP BY account_id
);

