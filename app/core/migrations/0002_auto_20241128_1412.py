# Generated by Django 3.2.25 on 2024-11-28 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('video_file', models.FileField(upload_to='videos/')),
                ('access_date', models.DateField()),
                ('week_number', models.PositiveIntegerField(unique=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Sample',
        ),
    ]
