<?php


namespace App\Controller\User;


use App\Entity\Promotion;
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
     * @Route("/signup", name="app_user_signup", methods={"POST","GET"})
     * @return JsonResponse
     */

    public function addUser(Request $request, EntityManagerInterface $em){
        // Entity Instance
        $promotion = new Promotion();
        $user = new User();

        // Get Value Form Post Form
        $name= $request->query->get('name');
        $nickname= $request->query->get('nickname');
        $firstname =$request->query->get('firstname');
        $password = password_hash($request->query->get('password'),PASSWORD_BCRYPT);
        $email = $request->query->get('email');
        $linkref = $request->query->get('linkref');
        $cursus = $request->query->get('cursus');
        $userPromotion =$request->query->get('user_promotion') ;

        //If promotion is not empty, and exist in db, get the id and set foreign key
        // If promotion is not empty, and doesn't exist, insert the new value in db, get the id, and set foreign key
        // else: do nothing
        if(!empty($userPromotion)){
            $query = $em->createQuery('select p.id from \App\Entity\Promotion p where
             CONCAT(p.name, p.years)= :promotion
        ');

            $query->setParameter("promotion",str_replace(' ','',$userPromotion));
            $result = $query->execute();
            if(empty($result)){
                preg_match_all('/(?<![0-9])[0-9]{4}(?![0-9])/', $userPromotion, $matches);
                $years = intval(implode(...$matches));
                preg_match_all('/\b[^\d\W]+\b/', $userPromotion, $matches);
                $promotionName = implode(' ', ...$matches);
                $promotion->setName($promotionName);
                $promotion->setYears($years);
                $em->persist($promotion);
                $em->flush();
            }
            $promotionId = empty($result) ? $promotion->getId() : intval(implode(...$result));
            $user->setIdPromotion($promotionId);
        }

        //Fill Entity Values

        $user->setName($name);
        $user->setFirstname($firstname);
        $user->setNickname($nickname);
        $user->setPassword($password);
        $user->setEmail($email);
        $user->setCursus($cursus);
        $user->setReferenceLink($linkref);

        //Add to DB
        $em->persist($user);
        $em->flush();


        //Return 200 status
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

    /**
     * @Route("/{user}/AddUserskills", name="_AddUserskills", methods={"POST"})
     */

    public function AddUserSkills($user){
        // Get Value Form Post Form
        $name= $request->query->get('name');
        $nickname= $request->query->get('nickname');
        $firstname =$request->query->get('firstname');
        $password = password_hash($request->query->get('password'),PASSWORD_BCRYPT);
        $email = $request->query->get('email');



        $user->setName($name);
        $user->setFirstname($firstname);
        $user->setNickname($nickname);
        $user->setPassword($password);
        $user->setEmail($email);

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
}