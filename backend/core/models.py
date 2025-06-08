from django.db import models

class Donor(models.Model):
    BLOOD_TYPES = [
        ('A+', 'A+'), ('A-', 'A-'),
        ('B+', 'B+'), ('B-', 'B-'),
        ('AB+', 'AB+'), ('AB-', 'AB-'),
        ('O+', 'O+'), ('O-', 'O-'),
    ]

    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    blood_type = models.CharField(max_length=3, choices=BLOOD_TYPES)
    location = models.CharField(max_length=255)
    last_donation = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class Recipient(models.Model):
    full_name = models.CharField(max_length=255)
    hospital = models.CharField(max_length=255)
    blood_type_needed = models.CharField(max_length=3, choices=Donor.BLOOD_TYPES)
    units_needed = models.PositiveIntegerField()
    urgency_level = models.CharField(max_length=20, default='normal')  # e.g., 'high', 'normal', 'low'
    status = models.CharField(max_length=20, default='pending')  # 'matched', 'pending'
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.blood_type_needed}"


class Donation(models.Model):
    donor = models.ForeignKey(Donor, on_delete=models.CASCADE)
    recipient = models.ForeignKey(Recipient, on_delete=models.CASCADE)
    date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Donation by {self.donor.full_name} to {self.recipient.full_name}"
