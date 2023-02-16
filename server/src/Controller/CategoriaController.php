<?php

namespace App\Controller;

use App\Entity\Categoria;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CategoriaController extends AbstractController
{
    #[Route('/categoria', name: 'app_categoria')]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $categoria=$doctrine->getRepository(Categoria::class)->find(1);
        $cuidadores=$categoria->getCuidador();
        return $this->json([
         'cuidadores'=>$cuidadores,
        ]);
    }
}
