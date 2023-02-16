<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230202092746 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("insert into cuidador (nombre,apellido,precio,descripcion,categorias_id,imagen) values ('Ander','Frago',12.99,'Soy un cuidador con 10 años de expreriencia',2,'https://picsum.photos/820/320?grayscale'),('Iban','Sarria',6.99,'Soy un cuidador con 10 años de expreriencia',1,'https://picsum.photos/820/320?grayscale'),('Maria','Martin',7.99,'Soy un cuidador con 10 años de expreriencia',3,'https://picsum.photos/820/320?grayscale'),('Daniel','Duran',8.99,'Soy un cuidador con 10 años de expreriencia',1,'https://picsum.photos/820/320?grayscale'),('Abilio','Diaz',9.99,'Soy un cuidador con 10 años de expreriencia',1,'https://picsum.photos/820/320?grayscale'),('Ana','Ramos',5.99,'Soy un cuidador con 10 años de expreriencia',2,'https://picsum.photos/820/320?grayscale');");
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cuidador DROP FOREIGN KEY FK_56759C405792B277');
        $this->addSql('DROP TABLE categoria');
        $this->addSql('DROP TABLE cuidador');
    }
}
