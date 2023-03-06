# Generated by Django 3.2.16 on 2023-03-01 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solicitudes', '0011_auto_20230301_0209'),
        ('users', '0002_alter_user_carrera'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='carrera',
        ),
        migrations.AddField(
            model_name='user',
            name='carreras',
            field=models.ManyToManyField(to='solicitudes.Carrera'),
        ),
    ]
