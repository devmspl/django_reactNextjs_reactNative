# Generated by Django 4.2.14 on 2024-07-22 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DjangoEcommerceApp', '0005_featured_products'),
    ]

    operations = [
        migrations.CreateModel(
            name='Instagram_image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instagram_img1', models.ImageField(upload_to='images/')),
                ('instagram_img2', models.ImageField(upload_to='images/')),
                ('instagram_img3', models.ImageField(upload_to='images/')),
                ('instagram_img4', models.ImageField(upload_to='images/')),
                ('instagram_img5', models.ImageField(upload_to='images/')),
                ('instagram_img6', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
