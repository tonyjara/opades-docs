---
slug: /notifications
sidebar_position: 5
---

# Notificaciones

Existen 3 maneras de enviar notificaciones a los usuarios:

1. Via Slack
2. Via navegador
3. Via correo

A continuación una tabla con las acciones que ejecutan notificaciones

| Acción                                 | Slack | Navegador | Mail |
| -------------------------------------- | ----- | --------- | ---- |
| Aprobar solicitud                      | ✅    | ❌        | ❌   |
| No aprobar solicitud                   | ✅    | ❌        | ❌   |
| Aprobar y ejecutar solicitud de dinero | ✅    | ✅        | ✅   |

## Implementación técnica

1- Para habilitar las notificaciones por slack se necesita tener configurado un bot con accesos al chat de canales dentro de slack. Los bots deben ser invitados a los grupos privados para que funcionen. Dentro de la configuración de en "Notificaciones Or." se debe copiar la id para los canales que se utilizan.
El token del slack bot debe ser pasado como variable de entorno.

2- Para acceder a las notificaciones por navigador los usuarios deben primero aprobar recibir notificaciones. Los secretos para activar esta opción deben ser pasados en las variables de entorno.

3- Para acceder a las notificaciones de correo por sendgrid se debe copiar en las variables de entorno tanto el correo del cual se enviarian las notificaciones como la llave de la api de sendgrid. Los usuarios pueden optar por no recibir las notificaciones dentro de la configuración.
