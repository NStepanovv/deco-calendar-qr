from django.contrib import admin

from .models import Video

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'week_number', 'access_date', 'video_file')
    list_filter = ('access_date',)
    search_fields = ('title', 'week_number')
