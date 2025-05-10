
# Portfolio de Keran Theydert

Bienvenue sur mon portfolio en ligne ! Ce site a été conçu pour présenter mes compétences et projets en développement web.

## Technologies utilisées

- **HTML5** : Structure du contenu et du site.
- **CSS3** : Mise en forme et animations.
- **JavaScript** : Interactivité et animations modernes.
- **PHP** : Gestion du formulaire de contact et logique côté serveur.
- **XAMPP** : Serveur local pour le développement.
- **PHPMailer** : Envoi d'e-mails via le formulaire de contact.

## Fonctionnalités

- **Formulaire de contact** : Permet aux utilisateurs de me contacter directement via e-mail. Les informations soumises sont envoyées à mon adresse e-mail.
- **Animations modernes** : Textes animés et effets visuels pour rendre l'expérience utilisateur plus engageante.
- **Footer avec mentions légales** : Section contenant les mentions légales, et autres informations légales importantes.
- **Responsive** : Le site est optimisé pour tous les types d'écrans, Tablette et au smartphone.

## Installation

### En local avec XAMPP

1. **Clonez le dépôt** :
    ```bash
    git clone https://github.com/ker92/Mon_Porfolio.git
    ```

2. **Placez le projet dans le répertoire `htdocs`** de votre installation XAMPP.
   Exemple :
    ```bash
    C:\xampp\htdocs\mon-portfolio
    ```

3. **Démarrez XAMPP** et ouvrez votre navigateur. Allez à l'adresse suivante :
    ```text
    http://localhost/mon-portfolio
    ```

4. **Configurer les variables d'environnement** :
   Ce projet n’utilise pas de base de données. Le formulaire de contact envoie un e-mail directement à l'aide de PHPMailer.
    ```process.php
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'keranthey02@gmail.com';
$mail->Password = 'wibp bzqd xiqn mdzd';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;


        $mail->setFrom($email, $name);
        $mail->addAddress('keranthey02@gmail.com');
    ```

5. **Configurer PHPMailer** pour l'envoi d'e-mails : Assurez-vous que vous avez configuré correctement votre SMTP dans le fichier PHP du formulaire de contact.

## Fonctionnement du formulaire de contact

Le formulaire de contact utilise **PHPMailer** pour envoyer un e-mail directement à mon adresse. Lorsqu'un utilisateur soumet un message via le formulaire, ce message est envoyé à l'adresse suivante : `keranthey02@gmail.com`.

## Structure des fichiers

```
/mon-portfolio
    /images          # Contient les images utilisées sur le site
    /css             # Contient le fichier style.css pour la mise en forme
    /js              # Contient les fichiers JavaScript pour l'interactivité
    /vendor          # Dépendances de Composer, y compris PHPMailer
    /index.php       # Page d'accueil de votre portfolio
    /contact.php     # Formulaire de contact
    /mentions.php    # Page des mentions légales
    /README.md       # Ce fichier
```

## Avenir et évolutions

- Ajouter une fonctionnalité de blog.
- Intégration avec une base de données pour gérer des projets dynamiques.
- Ajouter une fonctionnalité de téléchargement de CV.

## Contact

Vous pouvez me contacter directement via le [formulaire de contact](#) ou par e-mail à l'adresse suivante : `keranthey02@gmail.com`.

## Licence

Ce projet est sous **licence MIT**. Vous pouvez le modifier et le redistribuer librement.
