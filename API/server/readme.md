## ROUTER URL
### Promotion
    list promotion informations : /promotion/list
    add new promotion : /promotion/add
    
### Skills
    list skills information : /skills/list
    add new skills : incomming
### User
    list all user name : /user/name
    list user's  skills : incomming
    list user's promotion: /user/{name}/promotion
    user sign up : /signup
    
## FORM RESTRINCTIONS
### Promotion
    years: 
        type: int
        minlength: 4
        maxlength: 4
        name: year
    name:
        type: text
        minlength: 2
        maxlength: 10
        name: name
### Skills
    incomming
### User
    sign up form : 
        name:
            type: text
            minlength: 2
            maxlength: 60
            name: name
            
        firstname:
            type: text
            minlength: 2
            maxlength: 60
            name: firstname
            
        nickname:
            type: text
            minlength: 2
            maxlength: 60
            name: nickname
            
        password:
            type: text
            minlength: 2
            maxlength: 60
            name: password
            
        email:
            type: email
            minlength: 2
            maxlength: 150
            name: email
            
        reference link: (optional)
            type: text
            minlength: 2
            maxlength: 160
            name: linkref
            
        cursus: 
            type: longtext
            minlength: 10
            name: cursus
            
        promotion:
            type: text
            minlength: 2
            maxlength: 20
            name: user_promotion
            
## DATABASE STRUCTURE
### User
    ID
    - unique identifiant de l'utilisateur
      - primary key
      
    image
    - image de profile de l'utilisateur
        - binary stockage
     name 
    - nom de l'utilisateur
        - varchar 60
        
    firstname
    - prénom de l'utilisateur
        - varchar 60
         
    email
    - adresse email de l'utilisateur
        - varchar 150
    reference_link 
    - lien de référence de l'utilisateur (git, dribble, site perso ...)
        - varchar 160     
    cursus
    - cursus de l'utilisateur
        - longtext    
    rate
    - note de l'utilsateur / 20 données par les autres utilisateur après réalisation du projet
        - int
    
    password
    - mot de passe crypté de l'utilisateur
        - varchar 60
    
    nickName
    - pseudo de l'utilisateur
        - varchar 60
    
    id_promotion 
    - Promotion ( scolaire ) de l'utilisateur
        - foreign key

### Promotion
    years
    - Année de fin de la promotion
        - Years
    name
    - Nom de la promotion
        - varchar 10
    id
    - unique identifiant de la promotion
        - primary key 
 
 ### Skills
    id
     - unique identifiant de la compétences
         - primary key 
    name
    -   nom de la compétence
        - varchar 100
 
 ### User <-->  Compétences
    ID    
    - unique identifiant de la jointure
         - primary key 
    id_user
    - unique identifiant de l'utilisateur
      - int
    id_skills
    - unique identifiant de la compétence
      - int
    rate 
    - note / 20 donnée par le utilisateur sur la compétence
        - int 






