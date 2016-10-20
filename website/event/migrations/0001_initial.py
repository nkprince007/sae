# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-20 06:10
from __future__ import unicode_literals

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('is_finished', models.BooleanField(default=False, verbose_name='Is event finished?')),
                ('description', models.TextField(verbose_name='description')),
                ('start_date', models.DateTimeField(verbose_name='start date')),
                ('end_date', models.DateTimeField(verbose_name='end date')),
                ('icon', models.ImageField(storage=django.core.files.storage.FileSystemStorage(location='/Users/naveenkumarsangi/Documents/practice/Python/django/sae/website/static/media/images/events'), upload_to='', verbose_name='Image/Poster')),
            ],
        ),
        migrations.CreateModel(
            name='RegisteredUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('college', models.CharField(max_length=100)),
                ('events', models.ManyToManyField(to='event.Event')),
            ],
        ),
    ]