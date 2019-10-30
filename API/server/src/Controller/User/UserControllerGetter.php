<?php


namespace App\Controller\User;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserControllerGetter
 * @package App\Controller\User
 * @Route("/user", name="app_user", methods={"GET"})
 */

class UserControllerGetter extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }
    /**
     * @Route("/name", name="app_user_name", methods={"GET"})
     */
    function getUserName(){
        $query = $this->em->createQuery('
                  SELECT u.name from App\Entity\User u ');
        $result = $query->execute();
        return $this->json($result);
    }

    /**
     * @Route("/{user}", name="app_user_index", methods={"GET"})
     */

    function findUserInformation($user){
        $query = $this->em->createQuery("
                  SELECT u.name, u.firstname, u.nickname, u.email, u.referenceLink, u.rate, u.image
                  from App\Entity\User u 
                  WHERE u.name = :user");
        $query->setParameter('user',$user);
        $result = $query->execute();
        return $this->json($result);
    }

    /**
     * @Route("/{user}/skills", name="app_user_skills", methods={"GET"})
     */

    function findUserSkills($user){
        $query = $this->em->createQuery('
                select s.name, s.masterise, us.rate 
                from \App\Entity\Skills s
                join \App\Entity\UserSkills us 
                join \App\Entity\User u
                where s.id = us.idSkills
                    and u.id = us.idUser
                    and u.name = :user
                ');
        $query->setParameter('user',$user);
        $result = $query->execute();

        return $this->json($result);
    }

    /**
     * @Route("/{user}/promotion", name="app_user_promotion", methods={"GET"})
     */

    public function findUserPromotion($user){
        $query = $this->em->createQuery('
                select p.name, p.years
                from \App\Entity\Promotion p
                join \App\Entity\User u
                where u.idPromotion = p.id
                    and u.name = :user
        ');
        $query->setParameter('user',$user);
        $result = $query->execute();

        return $this->json($result);
    }

}