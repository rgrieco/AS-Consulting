/**
 * AS Consulting — Base de datos del Blog
 * Para agregar un nuevo artículo, añadir un objeto al array POSTS.
 * El primer elemento con featured:true aparece como artículo destacado en blog.html.
 * Las URLs del blog serán: /post.html?id=SLUG
 */

const POSTS = [
  {
    id: "multiadquirencia",
    title: "Multiadquirencia: ¿Qué cambia para tu negocio?",
    category: "Tributario",
    categoryKey: "tributario",
    badgeClass: "badge-tributario",
    date: "28 Setiembre 2022",
    dateSort: "2022-09-28",
    author: "AS Consulting",
    excerpt: "Desde el 1 de setiembre los comercios pueden elegir libremente su proveedor de pagos electrónicos. Impacto en costos, comisiones y operativa diaria.",
    image: "img/multiadquirencia.jpg",
    imageStyle: "",
    imageAlt: "Multiadquirencia Uruguay",
    featured: true,
    content: `
      <h2>Multiadquirencia</h2>

      <p>Desde el pasado 1 de setiembre, se simplificó un tema que resultaba poco práctico, en
      especial para los pequeños comerciantes, en lo que respecta a la venta con tarjetas
      de crédito, débito o dinero electrónico.</p>

      <p>Comenzó a regir lo que se denomina Multiadquirencia, donde se habilita a que
      la empresa adquiriente (la que tiene contacto con los comercios), le dará
      acceso a todos los medios de pago.</p>

      <p>Hasta la fecha, existían múltiples empresas que se dedican a proveer a los
      comercios el acceso al sistema de pagos, pero cada proveedor lo hacía para una
      marca en exclusividad. A partir de ahora, se ofrecerá el acceso para todas las tarjetas.</p>

      <p>Este cambio generará una mejora en los servicios de tarjetas de crédito y débito
      ofrecidos actualmente desde el sistema financiero, e incrementará la eficiencia del
      sector comercial a través de la racionalización de sus costos, y se espera que dicha
      eficiencia se vea reflejada en forma indirecta en mejores servicios para el consumidor.</p>

      <h2>Bienes no autorizados para Free Shops</h2>

      <p>Recientemente el Poder Ejecutivo mediante el Decreto 301/022 estableció el listado de
      bienes no autorizados para su comercialización por empresas habilitadas a operar en
      el régimen de venta de bienes a turistas extranjeros (Régimen Free Shop).</p>

      <p>Hasta la fecha el régimen se encontraba regulado por el Decreto 367/995, donde
      establecía el listado de los bienes que podían comercializarse bajo el régimen Free
      Shop (lista positiva). Es a partir del nuevo decreto, que regirá desde el 1 de noviembre
      de 2022, que se decide sustituir la lista positiva actual por la posibilidad de comercializar
      cualquier bien, salvo que se encuentre en el listado taxativo de prohibición:</p>

      <ul class="enumerado"><li>Medios de transporte, sus partes y repuestos; aceites y combustibles</li></ul>
      <ul class="enumerado"><li>Productos de la canasta básica de consumo de la población de frontera (incluidos productos del reino animal, vegetal y de almacén)</li></ul>
      <ul class="enumerado"><li>Animales vivos y Plantas</li></ul>
      <ul class="enumerado"><li>Armas y municiones</li></ul>
      <ul class="enumerado"><li>Maquinaria agrícola/agropecuaria, industrial, comercial y/o de servicios</li></ul>
      <ul class="enumerado"><li>Electrodomésticos de gran porte</li></ul>
      <ul class="enumerado"><li>Materiales de construcción civil, incluidos materiales eléctricos, hidráulicos y sanitarios</li></ul>
      <ul class="enumerado"><li>Neumáticos</li></ul>
      <ul class="enumerado"><li>Tejidos e hilados y calzados (excepto zapatillas deportivas y ojotas/chancletas)</li></ul>

      <p>Con esto se busca mantener el normal funcionamiento del régimen en frontera y la
      competencia leal entre los comerciantes de ambos países, incrementando la cantidad
      de bienes posibles.</p>
    `
  },

  {
    id: "creacion-sas",
    title: "Creación de Sociedades por Acciones Simplificadas (SAS)",
    category: "Societario",
    categoryKey: "societario",
    badgeClass: "badge-societario",
    date: "Agosto 2022",
    dateSort: "2022-08-01",
    author: "AS Consulting",
    excerpt: "Este tipo societario se vuelve una opción cada vez más conveniente para emprendedores y empresas. Menor costo, mayor agilidad y estructura flexible.",
    image: "img/consultant.svg",
    imageStyle: "padding: 30px; background:#f0f4f8;",
    imageAlt: "Sociedad por Acciones Simplificadas SAS Uruguay",
    featured: false,
    content: `
      <h2>Creación de Sociedades Anónimas Simplificadas (SAS)</h2>

      <p>Las empresas con aportación Rural e Industria y Comercio pueden adoptar este tipo
      social mediante constitución, transformación, regularización o conversión.</p>

      <p>Pueden constituirse bajo esta figura societaria tanto las personas físicas como las
      jurídicas (excepto las sociedades anónimas), en forma individual o colectiva.</p>

      <p><strong>Este tipo societario se vuelve cada vez una opción más conveniente para las
      diferentes empresas, ya sea por sus costos, su flexibilidad y los beneficios tributarios
      (que por ejemplo en el sector Software) pueden obtenerse.</strong></p>

      <p>La constitución e inscripción de una SAS prevé un procedimiento simplificado, cuando
      los socios, administradores y representantes legales sean personas físicas;
      necesitando para la apertura simplemente un usuario gub.uy u otro medio de
      identificación electrónica como ser cédula de identidad digital, Identidad Mobile -
      Abitab, o TuID - Antel.</p>

      <p>Dichos trámites se han vuelto más eficientes en el último tiempo, teniendo un costo
      muy accesible para el contribuyente. De todos modos también pueden obtenerse SAS
      pre-constituidas que en algunos casos puede ser una solución. Puntos que deberán
      analizarse en cada caso en particular, para evitar posteriores inconvenientes.</p>

      <h2>Proyecto de Rendición de Cuentas</h2>

      <p>En este momento se encuentra en el Parlamento el Proyecto de Ley de Rendición de
      Cuentas por el período 2021. En principio se evalúan una serie de cambios en la
      normativa, de los que pasamos a comentar los más importantes.</p>

      <p>El texto del proyecto establece que a partir del 1 de enero de 2023 los padrones rurales
      que en su conjunto no excedan las 200 hectáreas índice CONEAT 100 que se
      encuentran exonerados del pago del Impuesto de la Contribución Inmobiliaria Rural,
      donde no se computará como superficie explotada la ocupada por bosques naturales declarados "Protectores".</p>

      <li class="subtitulo">Cambios en tasas de IRPF/IRNR</li>

      <p>El proyecto de rendición establece cambios en las tasas que se aplican a la Categoría
      I del IRPF (rentas de capital, incrementos patrimoniales y otros) que actualmente van
      del 7% al 12%.</p>

      <p>Específicamente propone modificaciones estableciendo tasas del 0,5% al 12%,
      dependiendo del tipo de renta que corresponda. Además propone una clasificación
      similar para las rentas de este tipo gravadas por IRNR, pero manteniéndose la tasa del
      25% que grava las rentas obtenidas por entidades BONT ("paraísos fiscales").</p>

      <li class="subtitulo">Modificaciones Impuesto al Patrimonio - Deducciones</li>

      <p>Se agrega a la lista taxativa de deducciones de pasivos del Impuesto al Patrimonio de
      las personas jurídicas, las deudas contraídas con la Agencia Nacional de Desarrollo.</p>

      <li class="subtitulo">Modificaciones al Fondo de Solidaridad</li>

      <p>Se plantea disminuir la contribución adicional al Fondo de Solidaridad a partir del año
      2023 en un 25%. La disminución es anual y acumulativa, con lo cual en el 2026 quedaría
      eliminado el aporte adicional al Fondo de Solidaridad.</p>

      <h2>Proyecto de Ley — Cambios en el IRAE a las rentas pasivas del exterior</h2>

      <p>Como otra novedad, el pasado 28 de Julio, se dio a conocer un borrador del proyecto
      de ley en el cual se establecen cambios en el IRAE, estableciendo excepciones al
      criterio de la fuente para algunas rentas pasivas del exterior, en el marco de las
      obligaciones asumidas por Uruguay con la Unión Europea.</p>

      <li class="subtitulo">Aplicado a empresas de Grupo Multinacional</li>

      <p>Todas las modificaciones que se están proponiendo serán aplicadas solo a aquellas
      entidades que formen parte de un Grupo Multinacional, y no a los restantes
      contribuyentes de IRAE, por lo que la modificación es muy específica en cuanto al alcance.</p>

      <li class="subtitulo">Rentas alcanzadas por extensión de la fuente</li>

      <p>El proyecto establece modificaciones al artículo 7 del título 4 del IRAE, donde agrega
      nuevas rentas alcanzadas por el IRAE por la extensión de la fuente, siempre que sean
      obtenidas por una entidad integrante de un Grupo Multinacional considerada "no calificada":</p>

      <li class="destacado">Las rentas derivadas de derechos de propiedad intelectual obtenidas por una entidad integrante de un grupo multinacional relativos a patentes y software registrados, enajenados o utilizados económicamente fuera del territorio nacional, en la parte que no corresponda a ingresos calificados.</li>
      <li class="destacado">Las rentas que provengan de bienes situados o derechos utilizados económicamente fuera del territorio nacional, obtenidas por una entidad de grupo multinacional considerada no calificada.</li>

      <li class="subtitulo">Cláusula anti-abuso</li>

      <p>Por último, se incorpora una cláusula antiabuso que permite a la DGI desconocer las
      formas o mecanismos utilizados cuando se hubieren establecido con el propósito
      principal de obtener una ventaja tributaria que desvirtúe el objeto de la normativa.</p>

      <p>Las modificaciones, en caso de aprobarse el proyecto, regirían para ejercicios
      económicos iniciados a partir del 1º de enero de 2023.</p>
    `
  },

  {
    id: "salarios-moneda-extranjera",
    title: "Salarios en Moneda Extranjera",
    category: "Laboral",
    categoryKey: "laboral",
    badgeClass: "badge-laboral",
    date: "Julio 2022",
    dateSort: "2022-07-01",
    author: "AS Consulting",
    excerpt: "Mediante la negociación colectiva en Consejos de Salarios se fijan los mínimos por categoría. ¿Cómo se regulan los salarios pactados en dólares?",
    image: "img/laboral.svg",
    imageStyle: "padding: 30px; background:#f0f4f8;",
    imageAlt: "Salarios en moneda extranjera Uruguay",
    featured: false,
    content: `
      <h2>Salarios en Moneda Extranjera y la aplicación de los Consejos de Salarios</h2>

      <p>Los Consejos de Salarios se volvieron a convocar desde 2005, y están integrados por
      representantes de las empresas, trabajadores y el gobierno (órgano tripartito).</p>

      <p>Mediante la negociación colectiva, se fijan los salarios mínimos por categoría
      laboral y se determinan los ajustes de las remuneraciones de los trabajadores,
      entre otras cuestiones (beneficios, obligaciones, etc.).</p>

      <p>Cada grupo de actividad tiene un Consejo de Salario específico y además, dentro
      de cada uno, suele haber varios subgrupos, ámbito de negociación en el cual se
      determinan los sueldos de todos estos trabajadores, siendo obligatorios para todas
      las empresas, salvo que las mismas tengan un Convenio Salarial más beneficioso
      pactado por las partes y laudado por el Ministerio de Trabajo y Seguridad Social (MTSS).</p>

      <h2>Salarios en moneda extranjera</h2>

      <p>Ahora, ¿qué sucede con los salarios en moneda extranjera?</p>

      <p>Como sabemos, en Uruguay es habitual que existan sueldos en dólares americanos,
      pero ¿qué sucede cuando los consejos de salarios no establecen particularidades
      para los mismos y solo hablan de sueldos en moneda nacional?</p>

      <p>Como consecuencia de este vacío legal, el 9 de marzo del 2009 el MTSS estableció
      mediante una resolución un procedimiento a la hora de reajustar los salarios en
      moneda extranjera:</p>

      <li class="destacado">Se debe calcular el monto en pesos del salario en moneda extranjera que percibía el trabajador a la fecha del último ajuste previsto por los Consejos de Salarios, utilizando el tipo de cambio de esa fecha.</li>
      <li class="destacado">Luego se le deben aplicar los ajustes establecidos por el nuevo Consejo de Salarios.</li>
      <li class="destacado">Luego volver a convertir ese valor a dólares, solo que en la cotización de la fecha del nuevo reajuste.</li>

      <p>Si el resultado favorece al trabajador, se debe aplicar el reajuste. En caso contrario se
      mantiene el sueldo anterior. <strong>Es decir, no puede haber un reajuste a la baja en dólares.</strong></p>

      <p>Cabe destacar que son muchos los empleados uruguayos que cobran en moneda
      extranjera, sobre todo en dólares, especialmente quienes trabajan en las zonas francas.</p>

      <p>También existe la posibilidad de que en el mismo consejo de salarios se establezcan
      aumentos específicos para sueldos y partidas en moneda extranjera, lo que evitaría
      dudas y establecería los porcentajes de aumento para estos casos, pero esta es una
      opción que no se ve habitualmente en las diferentes rondas salariales.</p>

      <h2>Conclusiones</h2>

      <p>Los salarios en moneda extranjera deben ser reajustados de acuerdo a lo estipulado
      en los Consejos de Salarios, siempre que la variación de la cotización de la moneda
      extranjera —respecto a la moneda nacional— no hubiera superado en el período de
      reajuste los aumentos establecidos por los Consejos de Salarios.</p>

      <p>Dicha situación es en la que nos encontramos en este momento en los salarios en
      dólares, debido a la baja del tipo de cambio en el último semestre.</p>

      <p>Siempre tomando en consideración que en aquellos casos que las actas de cada
      grupo de actividad establezcan aumentos específicos para los sueldos y las partidas
      en moneda extranjera, estos serán los criterios a ser aplicados.</p>
    `
  },

  {
    id: "residencia-fiscal",
    title: "¿Qué es la Residencia Fiscal?",
    category: "Tributario",
    categoryKey: "tributario",
    badgeClass: "badge-tributario",
    date: "Febrero 2022",
    dateSort: "2022-02-01",
    author: "AS Consulting",
    excerpt: "Ser residente fiscal implica convertirse en contribuyente del IRPF. Conocé los criterios para acreditar residencia fiscal en Uruguay y cómo afecta tus obligaciones.",
    image: "img/taxes.svg",
    imageStyle: "padding: 30px; background:#f0f4f8;",
    imageAlt: "Residencia Fiscal Uruguay",
    featured: false,
    content: `
      <h2>¿Qué es la Residencia Fiscal?</h2>

      <p>Ser residente fiscal de un país implica que la persona se convierte en contribuyente
      del impuesto a la renta, y por consiguiente debe cumplir con todas las obligaciones
      formales y sustanciales dentro del país.</p>

      <p>A su vez, en el caso de los convenios para evitar la doble imposición, la residencia
      fiscal es la que determina qué país posee la potestad tributaria para gravar las rentas
      del individuo.</p>

      <p>Para obtener el certificado de residencia fiscal, el interesado deberá acreditar su
      residencia fiscal en el país por el período solicitado, conforme lo dispuesto por la
      normativa vigente.</p>

      <li class="subtitulo">Residencia Fiscal Uruguaya</li>

      <p>La residencia fiscal uruguaya de una persona física podrá ser acreditada siempre y
      cuando se cumpla con cualquiera de los siguientes criterios:</p>

      <li class="subtitulo">Permanencia en el país por más de 183 días durante el año civil</li>

      <p>A estos efectos, deberán considerarse asimismo las ausencias esporádicas (cuando no
      excedan los 30 días corridos, salvo que el contribuyente acredite residencia fiscal en
      otro país). Este criterio deberá justificarse mediante el certificado de movimientos
      migratorios emitido por la Dirección Nacional de Migración.</p>

      <li class="subtitulo">Base de actividades en el país</li>

      <p>Debe radicar en el territorio nacional el núcleo principal o la base de sus actividades
      o de sus intereses económicos o vitales. Quien solicita la residencia deberá probar que
      su base de actividades es en Uruguay demostrando que las rentas obtenidas en el país
      son las mayores que obtiene respecto al resto del mundo.</p>

      <li class="subtitulo">Intereses vitales</li>

      <p>La normativa también permite demostrar la residencia de un país cuando hay presunción
      de que su núcleo familiar vive en el país (cónyuge e hijos menores a cargo), cargando
      con la prueba por todo el período que se solicita.</p>

      <li class="subtitulo">Intereses económicos</li>

      <p>Para demostrar la residencia fiscal en base a los intereses económicos existen varias
      hipótesis, que aplican solamente si el contribuyente no acredita su residencia en otro país.
      Serán residentes fiscales aquellos que posean una inversión:</p>

      <li class="destacado">Bienes inmuebles, por un valor superior a 15.000.000 de unidades indexadas (UI — aproximadamente USD 1.700.000).</li>
      <li class="destacado">Participación en una empresa directa o indirectamente por un valor superior a 45.000.000 UI (aprox. USD 5.100.000) con actividades o proyectos declarados de interés nacional (ley 16.906).</li>

      <p>Y desde el año 2020 se agregan:</p>

      <li class="destacado">Bienes inmuebles por un valor superior a 3.500.000 UI (aprox. USD 390.000) siempre que la inversión se realice a partir del 01.07.20 y exista una presencia física de al menos 60 días en el año civil.</li>
      <li class="destacado">Participación en una empresa por un valor superior a 15.000.000 UI (aprox. USD 1.700.000), realizada a partir del 01.07.20, que genere al menos 15 puestos de trabajo directo a tiempo completo durante el año civil.</li>

      <li class="subtitulo">Tax Holiday</li>

      <p>Una vez obtenida la residencia fiscal en Uruguay, el nuevo residente queda comprendido
      en el régimen tributario de los residentes con un beneficio temporal frente a los demás.</p>

      <p>El concepto de <em>tax holiday</em> refiere a que quien se convierte en residente fiscal
      por el período de 5 años tributa IRNR (0%), y no IRPF al 12%, ya que en el IRNR no se
      encuentran gravadas las rentas mobiliarias del exterior (intereses y dividendos).</p>

      <p>La normativa, con los últimos cambios establecidos por la Ley 19.904, flexibilizó
      dicha situación, estableciendo que a <strong>partir del ejercicio fiscal 2020</strong>
      se puede optar entre:</p>

      <li class="destacado">Extender el plazo del tax holiday a 10 años.</li>
      <li class="destacado">Optar por mantenerse tributando IRPF desde el momento que se vuelve residente fiscal a la tasa del 7%.</li>

      <p>Esto dependerá de la conveniencia de cada contribuyente en particular.</p>
    `
  }
];
