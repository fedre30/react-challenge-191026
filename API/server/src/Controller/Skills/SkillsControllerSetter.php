<?php


namespace App\Controller\Skills;


use App\Entity\Skills;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SkillsControllerSetter
 * @package App\Controller\Skills
 * @Route("/skills", name="app_skills", methods={"POST","GET"})
 */

class SkillsControllerSetter extends AbstractController
{
    /**
     * @Route("/add", name="_add", methods={"POST"})
     */

    public function addNewSkills(Request $request, EntityManagerInterface $em){
        $skillsName = $request->query->get('name');
        $skills = new Skills();
        $skills->setName($skillsName);
        $em->persist($skills);
        $em->flush();

        return new JsonResponse([
            'status' => "ok"
        ], JsonResponse::HTTP_CREATED);
    }

    /**
     * @Route("/form")
     */
    public function promotionFormulaire(){
        return $this->render("skill_form.html.twig");
    }

}