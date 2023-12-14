-- select min(age), max(age) as maximum, avg(age) as Old
-- from employee

-- select count(fullname) as old_employees
-- from employee
-- where age>=20


-- INSERT INTO employee(nic,age,fullname,fulltime)
-- Values ('1234',20,'John Doe',true), ('5678',30,'Jack',false)


-- select DISTINCT fullname 
-- from employee

-- Update employee
-- set fullname='jack'
-- where nic='5678'


-- select *
-- from employee
-- where fullname not in ('eric','John Doe');


-- select * 
-- from employee
-- where age between 10 and 40;


-- Create table inventory(
--   id SERIAL Primary Key,
--   name varchar(50) not null,
--   category varchar(20),
--   price decimal
-- );

-- drop table inventory;

-- Insert into inventory(name,category,price)
-- values ('butter','food',80.00),('rice','food',350.00),('tissue','necessity',110.00),('gloves','clothes',150.50),('tshirt','clothes',350.00),('milk','food',200.50);

-- select DISTINCT category
-- from inventory;

-- select avg(price)
-- from inventory;

-- select category, count(category), avg(price), min(price), max(price)
-- from inventory
-- Group by category;

-- create table sales(
--   id SERIAL Primary key,
--   buyer_name varchar(50),
--   item_id SERIAL references inventory (id),
--   quantity decimal
-- );

-- insert into sales(buyer_name,item_id,quantity)
-- values('tom',2,3),('eric',3,1),('jack',6,5),('pierre',6,2),('rita',4,10)


-- select * 
-- from sales
-- where buyer_name='eric';

-- select s.buyer_name,i.name,i.category,i.price,s.quantity, s.quantity*i.price as total
-- from sales as s
-- inner join inventory as i
-- ON s.item_id = i.id

select category, avg(s.quantity*i.price)
from sales as s
inner join inventory as i
ON s.item_id = i.id
group by i.category
having category in ('food','necessity');
