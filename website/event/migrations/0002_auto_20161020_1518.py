# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-20 09:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='registereduser',
            name='branch',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='registereduser',
            name='mobile',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='registereduser',
            name='roll',
            field=models.CharField(default='', max_length=100),
        ),
    ]
