from django.db import models


class Video(models.Model):
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='videos/')
    access_date = models.DateField()
    week_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"Week {self.week_number}: {self.title}"
