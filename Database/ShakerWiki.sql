-- MySQL Script generated by MySQL Workbench
-- Tue Sep  5 16:26:19 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema shakerwiki
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shakerwiki
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shakerwiki` DEFAULT CHARACTER SET utf8 ;
USE `shakerwiki` ;

-- -----------------------------------------------------
-- Table `shakerwiki`.`info_of_cocteils`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shakerwiki`.`info_of_cocteils` (
  `idCocteil` INT NOT NULL AUTO_INCREMENT,
  `name_of_cocteil` VARCHAR(45) NOT NULL,
  `history_of_cocteil` VARCHAR(5000) NOT NULL,
  `like_of_cocteil` INT NULL,
  `cockteils_preparation` VARCHAR(5000) NOT NULL,
  PRIMARY KEY (`idCocteil`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shakerwiki`.`ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shakerwiki`.`ingredients` (
  `idIngredients` INT NOT NULL AUTO_INCREMENT,
  `ingredient` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`idIngredients`),
  UNIQUE INDEX `ingredient_UNIQUE` (`ingredient` ASC),
  UNIQUE INDEX `idIngredients_UNIQUE` (`idIngredients` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shakerwiki`.`cocteil_ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shakerwiki`.`cocteil_ingredients` (
  `idCocteil` INT NOT NULL,
  `idIngredient` INT NOT NULL,
  `volum` VARCHAR(45) NULL,
  INDEX `idCocteil_idx` (`idCocteil` ASC),
  INDEX `idIngredients_idx` (`idIngredient` ASC),
  CONSTRAINT `idCocteil`
    FOREIGN KEY (`idCocteil`)
    REFERENCES `shakerwiki`.`info_of_cocteils` (`idCocteil`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idIngredients`
    FOREIGN KEY (`idIngredient`)
    REFERENCES `shakerwiki`.`ingredients` (`idIngredients`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shakerwiki`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shakerwiki`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `userPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC),
  UNIQUE INDEX `idUser_UNIQUE` (`idUser` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shakerwiki`.`userLikeCocteil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shakerwiki`.`userLikeCocteil` (
  `idUser` INT NOT NULL,
  `idCocteil` INT NOT NULL,
  INDEX `idUser_idx` (`idUser` ASC),
  PRIMARY KEY (`idUser`),
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `shakerwiki`.`user` (`idUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `shakerwiki`.`info_of_cocteils`
-- -----------------------------------------------------
START TRANSACTION;
USE `shakerwiki`;
INSERT INTO `shakerwiki`.`info_of_cocteils` (`idCocteil`, `name_of_cocteil`, `history_of_cocteil`, `like_of_cocteil`, `cockteils_preparation`) VALUES (1, 'Американо', 'Коктейль Американо — это классика алкогольных изысков, родившаяся, благодаря бармену Гаспару Кампари, еще в XIX веке в одном из баров Италии. Он решил смешать биттер на основе цитрусов, красный вермут и содовую, в результате чего получил жгучую алкогольную смесь с привкусом цитрусовой горечи. Такой напиток пришелся по вкусу группе американцев, однажды посетивших бар Кампари. Автору коктейля это очень польстило, и он решил запечатлеть этот приятный для себя момент в названии своего детища — коктейль Американо. Конечно, на протяжении долгого временного пути к XXI столетию рецепт Американо неоднократно дополнялся, изменялся и совершенствовался барменами разных стран, но и сегодня вы можете заказать тот самый Американо, который в свое время пили в баре Гаспара Кампари. Чтобы сохранить всю колоритность напитка, его непременно подадут вам в классическом старомодном бокале, и вы сможете ощутить то же самое, что ощущали ваши предшественники, наслаждавшиеся терпкой горечью творения Кампари. А особые ценители алкогольной горечи могут заказать вариант коктейля с тоником вместо содовой: такой рецепт коктейля Американо был создан специально для создания еще более крепких ощущений.', 0, 'Налить в стакан со льдом кампари и вермут;Аккуратно перемешать ложкой;Долить доверху содовую;Украсить половиной дольки апельсина.');

COMMIT;


-- -----------------------------------------------------
-- Data for table `shakerwiki`.`ingredients`
-- -----------------------------------------------------
START TRANSACTION;
USE `shakerwiki`;
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (1, 'Апельсин');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (2, 'Кампари');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (3, 'Красный вермут');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (4, 'Содовая');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (5, 'Лед в кубиках');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (6, 'Джин');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (7, 'Абрикосовый бренди');
INSERT INTO `shakerwiki`.`ingredients` (`idIngredients`, `ingredient`) VALUES (8, 'Апельсиновый сок');

COMMIT;


-- -----------------------------------------------------
-- Data for table `shakerwiki`.`cocteil_ingredients`
-- -----------------------------------------------------
START TRANSACTION;
USE `shakerwiki`;
INSERT INTO `shakerwiki`.`cocteil_ingredients` (`idCocteil`, `idIngredient`, `volum`) VALUES (1, 1, '1/2 дольки');
INSERT INTO `shakerwiki`.`cocteil_ingredients` (`idCocteil`, `idIngredient`, `volum`) VALUES (1, 2, '30 мл');
INSERT INTO `shakerwiki`.`cocteil_ingredients` (`idCocteil`, `idIngredient`, `volum`) VALUES (1, 3, '30 мл');
INSERT INTO `shakerwiki`.`cocteil_ingredients` (`idCocteil`, `idIngredient`, `volum`) VALUES (1, 4, NULL);
INSERT INTO `shakerwiki`.`cocteil_ingredients` (`idCocteil`, `idIngredient`, `volum`) VALUES (1, 5, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `shakerwiki`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `shakerwiki`;
INSERT INTO `shakerwiki`.`user` (`idUser`, `userName`, `userPassword`) VALUES (1, 'Олег', '1111');

COMMIT;

