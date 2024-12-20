server {
    listen ${LISTEN_PORT};

        location / {
        root ${FRONTEND_PATH};
        index index.html;
        try_files $uri /index.html;
    }

    location /admin {
        uwsgi_pass ${APP_HOST}:${APP_PORT};
        include /etc/nginx/uwsgi_params;
        client_max_body_size 100M;
    }

    location /static/admin {
        alias /vol/static;
    }



    location /static/media {
        alias /vol/static/media;
    }

    location /api {
        proxy_pass http://${APP_HOST}:${APP_PORT};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    client_max_body_size 100M;

}
