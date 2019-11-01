<?php


namespace App\Controller\Promotion;


use App\Entity\Promotion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\JsonResponse as JsonResponseAlias;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PromotionControllerSetter
 * @package App\Controller\Promotion
 * @Route("/promotion", name="app_promotion", methods={"POST","GET"})
 */
class PromotionControllerSetter extends AbstractController
{
    /**
     * @Route("/add", name="_add")
     * @param Request $request
     * @return JsonResponseAlias
     */
    public function AddPromotion(Request $request, EntityManagerInterface $em){
        $promotionName = $request->query->get('name');
        $promotionYear = $request->query->get('year');
        $promotion = new Promotion();
        $promotion->setName($promotionName);
        $promotion->setYears(intval($promotionYear));
        $em->persist($promotion);
        $em->flush();

        return new JsonResponse([
            'status' => "ok"
        ], JsonResponse::HTTP_CREATED);
    }
    /**
     * @Route("/form")
     */

    public function promotionFormulaire(){
        return $this->render("promotion_form.html.twig");
    }
}