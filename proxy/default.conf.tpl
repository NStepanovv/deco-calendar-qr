server {
    listen ${LISTEN_PORT};

    # Frontend (React)
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend (Django API)
    location /api/ {
        proxy_pass http://${APP_HOST}:${APP_PORT}/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }


    # Media files (videos, images)
    location /media/ {
        alias /vol/web/media/;
    }

    # Static files
    location /static/ {
        alias /vol/static/;
    }

}
