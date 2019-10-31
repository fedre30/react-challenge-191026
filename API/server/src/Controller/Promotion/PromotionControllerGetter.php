<?php


namespace App\Controller\Promotion;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PromotionControllerGetter extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em=$entityManager;
    }

    /**
     * @Route("/promotion", name="app_promotion_index", methods={"GET"})
     */
    function index(){
        $query = $this->em->createQuery('Select p.name, p.years from \App\Entity\Promotion p ');
        $result = $query->execute();
        return $this->json($result);
    }
}