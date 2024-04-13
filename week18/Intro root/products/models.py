from django.db import models

# Create your models here.

class Product(models.Model):
    id= models.AutoField(primary_key=True)
    name = models.CharField(max_length=100,unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    stock = models.IntegerField()
    image = models.ImageField(upload_to='products/images/', null=True, blank=True)

    def __str__(self):
        return self.name
