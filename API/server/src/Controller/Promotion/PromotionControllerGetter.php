<?php


namespace App\Controller\Promotion;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PromotionControllerGetter
 * @package App\Controller\Promotion
 */
class PromotionControllerGetter extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em=$entityManager;
    }

    /**
     * @Route("/promotion/list", name="app_promotion_list", methods={"GET"})
     * @return JsonResponse
     */
    function index(){
        $query = $this->em->createQuery('Select p.name, p.years from \App\Entity\Promotion p ');
        $result = $query->execute();
        return $this->json($result);
    }

    /**
     * @Route("/test")
     */
    function test(){
        $test = "test";
        return $this->json($test);
    }
}