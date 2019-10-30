# User
* ID
    - unique identifiant de l'utilisateur
      - primary key
* image
    - image de profile de l'utilisateur
        - binary stockage
* name 
    - nom de l'utilisateur
        - varchar 60
        
* firstname
    - prénom de l'utilisateur
        - varchar 60
         
* email
    - adresse email de l'utilisateur
        - varchar 150
* reference_link 
    - lien de référence de l'utilisateur (git, dribble, site perso ...)
        - varchar 160     
* cursus
    - cursus de l'utilisateur
        - longtext    
* rate
    - note de l'utilsateur / 20 données par les autres utilisateur après réalisation du projet
        - int
    
* password
    - mot de passe crypté de l'utilisateur
        - varchar 60
    
* nickName
    - pseudo de l'utilisateur
        - varchar 60
    
* id_promotion 
    - Promotion ( scolaire ) de l'utilisateur
        - foreign key

# Promotion
 * years
    - Année de fin de la promotion
        - Years
 * name
    - Nom de la promotion
        - varchar 10
 * id
    - unique identifiant de la promotion
        - primary key 
 
 # Skills
 * id
     - unique identifiant de la compétences
         - primary key 
 * name
    -   nom de la compétence
        - varchar 100
 * masterise
    - niveau de maitrise de la compétence
        - int
 
 # User <-->  Compétences
 * ID    
    - unique identifiant de la jointure
         - primary key 
 * id_user
    - unique identifiant de l'utilisateur
      - int
 * id_skills
    - unique identifiant de la compétence
      - int
 * rate 
    - note / 20 donnée par le utilisateur sur la compétence
        - int 






