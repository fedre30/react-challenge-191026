<?php


namespace App\Controller\User;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class UserControllerSetter
 * @package App\Controller\User
 */
class UserControllerSetter extends AbstractController
{
    /**
     * @param Request $request
     * @Route("/signin", name="app_user_signin", methods={"POST","GET"})
     * @return JsonResponse
     */

    public function addUser(Request $request, EntityManagerInterface $em){
        $name= $request->query->get('name');
        $nickname= $request->query->get('nickname');
        $firstname =$request->query->get('firstname');
        $password = password_hash($request->query->get('password'),PASSWORD_BCRYPT);
        $email = $request->query->get('email');
        $linkref = $request->query->get('linkref');
        $cursus = $request->query->get('cursus');
        $userPromotion =$request->query->get('user_promotion') ;

        $user = new User();
        $user->setName($name);
        $user->setFirstname($firstname);
        $user->setNickname($nickname);
        $user->setPassword($password);
        $user->setEmail($email);
        $user->setCursus($cursus);
        $user->setReferenceLink($linkref);

        $em->persist($user);
        $em->flush();

        dd($user->getId());

        return new JsonResponse([
            'status' => "ok"
        ], JsonResponse::HTTP_CREATED);
    }

    /**
     * @return Response
     * @Route("/register")
     */

    public function registerForm()
    {
        return $this->render("user_form.html.twig");
    }
}