<?php

namespace App\Controller;

use App\Entity\Categoria;
use App\Entity\Cuidador;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CuidadorController extends AbstractController
{
    private $cuidador;

    public function __construct(ManagerRegistry $doctrine)
    {
    }

    #[Route('/cuidador-new', name: 'app_create_cuidador',methods: 'post')]
    public function createCuidador(ManagerRegistry $doctrine, Request $request): Response
    {
        $data = $request->getContent();
        $content = json_decode($data);

        $em = $doctrine->getManager();
        $cuidador = new Cuidador();
        $cuidador->setNombre($content->nombre);
        $cuidador->setApellido($content->apellido);
        $cuidador->setPrecio($content->precio);
        $cuidador->setDescripcion($content->descripcion);
        $categoria = $doctrine->getRepository(Categoria::class)->find($content->categorias);
        $cuidador->setCategorias($categoria);
        $cuidador->setImagen($content->imagen);
        $em->persist($cuidador);
        $em->flush();

        $result = [
            'nombre' => $cuidador->getNombre(),
            'apellido' => $cuidador->getApellido(),
            'precio' => $cuidador->getPrecio(),
            'descripcion' => $cuidador->getDescripcion(),
            'categorias' => $cuidador->getCategorias()->getNombre(),
            'imagen' => $cuidador->getImagen()
        ];

        return $this->json([
            $result
        ]);
    }
    #[Route('/cuidador-list', name: 'app_cuidador_list',methods: 'get')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $cuidadores = $doctrine->getRepository(Cuidador::class)->findAll();
        $cuidadores_json = [];
        $tmp=[];

        foreach ($cuidadores as $cuidador){
            $tmp=[
                'id'=>$cuidador->getId(),
                'nombre' => $cuidador->getNombre(),
                'apellido' => $cuidador->getApellido(),
                'precio' => $cuidador->getPrecio(),
                'descripcion' => $cuidador->getDescripcion(),
                'categorias' => $cuidador->getCategorias()->getNombre(),
                'imagen' => $cuidador->getImagen()
            ];
            $cuidadores_json[]=$tmp;
        }

        return $this->json([
            $cuidadores_json
        ]);
    }
    #[Route('/cuidador/{id}', name: 'app_cuidador_details',methods: 'get')]
    public function cuidadordetails($id,ManagerRegistry $doctrine): Response
    {
        $cuidador = $doctrine->getRepository(Cuidador::class)->findOneBy([
            'id'=>$id
        ]);
        $cuidador_json = [
            'id'=>$cuidador->getId(),
            'nombre' => $cuidador->getNombre(),
            'apellido' => $cuidador->getApellido(),
            'precio' => $cuidador->getPrecio(),
            'descripcion' => $cuidador->getDescripcion(),
            'categorias' => $cuidador->getCategorias()->getNombre(),
            'imagen' => $cuidador->getImagen()
        ];

        return $this->json([
            $cuidador_json
        ]);
    }
    #[Route('/cuidador-edit/{id}', name: 'app_cuidador_edit',methods: 'put')]
    public function cuidadoredit($id,ManagerRegistry $doctrine, Request $request): Response
    {
        $em = $doctrine->getManager();
        $cuidador = $doctrine->getRepository(Cuidador::class)->findOneBy([
            'id'=>$id
        ]);
        $data = $request->getContent();
        $content = json_decode($data);

        $cuidador->setNombre($content->nombre);
        $cuidador->setApellido($content->apellido);
        $cuidador->setPrecio($content->precio);
        $cuidador->setDescripcion($content->descripcion);
        $categoria = $doctrine->getRepository(Categoria::class)->findOneBy([
                'id'=>$content->categorias
            ]);
        $cuidador->setCategorias($categoria);
        $cuidador->setImagen($content->imagen);

        $em->persist($cuidador);
        $em->flush();
        
        $cuidador = $doctrine->getRepository(Cuidador::class)->findOneBy([
            'id'=>$id
        ]);

        $cuidador_json = [
            "id" => $cuidador->getId(),
            'nombre' => $cuidador->getNombre(),
            'apellido' => $cuidador->getApellido(),
            'precio' => $cuidador->getPrecio(),
            'descripcion' => $cuidador->getDescripcion(),
            'categorias' => $cuidador->getCategorias()->getNombre(),
            'imagen' => $cuidador->getImagen()
        ];

        return $this->json([
            'cuidador'=>$cuidador_json
        ]);
    }
    #[Route('/cuidador-delete/{id}', name: 'app_cuidador_delete',methods: 'delete')]
    public function cuidadordelete($id,ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $cuidador = $doctrine->getRepository(Cuidador::class)->findOneBy([
            'id'=>$id
        ]);

        $em->remove($cuidador);
        $em->flush();

        return $this->json([
            'message'=>'Cuidador deleted'
        ]);
    }

}
