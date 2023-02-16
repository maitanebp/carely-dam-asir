<?php

namespace App\Entity;

use App\Repository\CategoriaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriaRepository::class)]
class Categoria
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\OneToMany(mappedBy: 'categorias', targetEntity: Cuidador::class)]
    private Collection $cuidador;

    public function __construct()
    {
        $this->cuidador = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * @return Collection<int, Cuidador>
     */
    public function getCuidador(): Collection
    {
        return $this->cuidador;
    }

    public function addCuidador(Cuidador $cuidador): self
    {
        if (!$this->cuidador->contains($cuidador)) {
            $this->cuidador->add($cuidador);
            $cuidador->setCategorias($this);
        }

        return $this;
    }

    public function removeCuidador(Cuidador $cuidador): self
    {
        if ($this->cuidador->removeElement($cuidador)) {
            // set the owning side to null (unless already changed)
            if ($cuidador->getCategorias() === $this) {
                $cuidador->setCategorias(null);
            }
        }

        return $this;
    }
}
