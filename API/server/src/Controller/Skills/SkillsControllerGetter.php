<?php


namespace App\Controller\Skills;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SkillsControllerGetter
 * @package App\Controller\Skills
 */

class SkillsControllerGetter extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em= $entityManager;
    }

    /**
     * @Route("/skills", name="app_skills_index", methods={"GET"})
     */
    public function getSkillsName(){
        $query = $this->em->createQuery("select s.name,s.masterise from \App\Entity\Skills s");
        $result = $query->execute();
        return $this->json($result);
    }
}