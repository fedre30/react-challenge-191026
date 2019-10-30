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
     * @Route("/name", name="app_user_name", methods={"GET"})
     */
    function getUserName(){
        $query = $this->em->createQuery('
                  SELECT u.name from App\Entity\User u ');
        $result = $query->execute();
        return $this->json($result);
    }

}