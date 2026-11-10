(function(){
  "use strict";
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches || root.classList.contains('a11y-motion');

  /* ============================================================
     I18N — Spanish (default) / English dictionary + toggle.
     Every key that appears in cms/content/schema.php is editable in the
     Content Manager (/admin); values edited there are published into
     index.html as an inert JSON block (#siteContent) and merged below.
     tools/extract-defaults.mjs regenerates cms/content/defaults.php from
     this object, so this is the single source of the approved copy.
     ============================================================ */
  var I18N = {
    es: {
      "meta.title": "Clínica Lumen · Especialidades médicas en Zona 10",
      "meta.description": "Consulta externa en Zona 10: medicina general, pediatría, ginecología, cardiología, laboratorio y ultrasonido. Citas de lunes a sábado.",
      "og.locale": "es_GT",
      "brand.aria": "Clínica Lumen, ir al inicio",
      "lang.toggle_aria": "Cambiar idioma a inglés",
      "lang.switch_to": "English",
      "menu.open_aria": "Abrir menú",
      "menu.close_aria": "Cerrar menú",
      "mobilenav.aria": "Menú principal",
      "skip": "Saltar al contenido",
      "backtotop.aria": "Volver arriba",
      "a11y.new_tab": " (se abre en una pestaña nueva)",
      "a11y.open_aria": "Opciones de accesibilidad",
      "a11y.close": "Listo",
      "a11y.size_small": "Texto normal",
      "a11y.size_medium": "Texto grande",
      "a11y.size_large": "Texto muy grande",
      "actions.call": "Llamar",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Cómo llegar",
      "actions.aria": "Acciones rápidas",
      "whatsapp.aria": "Escríbanos por WhatsApp (se abre en una pestaña nueva)",
      "contact.map_aria": "Abrir la ubicación de la clínica en Google Maps (se abre en una pestaña nueva)",
      "nav.services": "Servicios",
      "nav.maternity": "Control prenatal",
      "nav.facilities": "Instalaciones",
      "nav.patients": "Pacientes",
      "nav.insurance": "Seguros",
      "nav.contact": "Contacto",
      "nav.emergency": "Llamar",
      "hero.eyebrow": "Zona 10 · Consulta externa y especialidades",
      "hero.title": "Su salud, atendida con <em>calma</em> y precisión",
      "hero.desc": "Once especialidades, laboratorio y ultrasonido en una sola sede de Zona 10. Agende su cita en línea, por teléfono o por WhatsApp.",
      "hero.cta1": "Agendar cita",
      "hero.cta2": "Escribir por WhatsApp",
      "hero.status": "Abierto de lunes a sábado",
      "hero.badge1": "Parqueo para pacientes",
      "hero.badge2": "Resultados en línea",
      "hero.badge3": "Pago con aseguradoras",
      "quick.emergency": "Llamar a la clínica",
      "quick.whatsapp": "WhatsApp directo",
      "quick.visits": "Horario de atención",
      "quick.directions": "Cómo llegar",
      "quick.aria": "Información rápida",
      "stat1.value": "11",
      "stat1.label": "especialidades y servicios",
      "stat2.value": "8",
      "stat2.label": "médicos en el directorio",
      "stat3.value": "Lun–Sáb",
      "stat3.label": "consulta con cita previa",
      "stat4.value": "1",
      "stat4.label": "sede accesible en Zona 10",
      "services.eyebrow": "Servicios",
      "services.title": "Especialidades y servicios",
      "services.desc": "Consulta con especialistas, laboratorio clínico y ultrasonido en un mismo lugar, para que su atención sea ordenada y sin traslados innecesarios.",
      "services.cta": "Consultar por WhatsApp",
      "services.more": "Ver más",
      "services.more_aria": "Ver más sobre {name}",
      "services.call": "Llamar",
      "services.close": "Cerrar",
      "service1.title": "Medicina general",
      "service1.desc": "Consulta para síntomas comunes, control de enfermedades crónicas y orientación sobre el especialista adecuado.",
      "service1.more": "La consulta de medicina general es un buen punto de partida cuando no sabe a qué especialista acudir. El médico revisa sus síntomas, su historia clínica y los medicamentos que toma.\n\nAtendemos malestares frecuentes, controles de presión arterial y glucosa, certificados médicos y seguimiento de tratamientos.\n\nSi su caso lo requiere, le referimos con el especialista indicado dentro de la clínica y coordinamos los exámenes necesarios.",
      "service2.title": "Pediatría",
      "service2.desc": "Control de niño sano, seguimiento del crecimiento y atención de enfermedades frecuentes, desde el nacimiento hasta la adolescencia.",
      "service2.more": "En pediatría acompañamos el crecimiento de sus hijos con controles periódicos de peso, talla y desarrollo.\n\nAtendemos consultas por fiebre, tos, molestias digestivas y otros malestares frecuentes de la infancia, y orientamos a la familia sobre alimentación, sueño y vacunación.\n\nProgramamos cada cita con tiempo suficiente para que el niño se sienta tranquilo y usted pueda resolver sus dudas.",
      "service3.title": "Ginecología y obstetricia",
      "service3.desc": "Control ginecológico anual, control prenatal, planificación familiar y atención de molestias ginecológicas, con un trato respetuoso y privado.",
      "service3.more": "La consulta de ginecología incluye la revisión anual, el papanicolaou y la orientación sobre planificación familiar.\n\nEn obstetricia ofrecemos control prenatal con ultrasonido y laboratorio en la misma clínica. Cuando se acerca la fecha del parto, su médico le orienta sobre el centro hospitalario donde será atendida.\n\nLa visita regular con su ginecólogo es una parte importante del cuidado de su salud.",
      "service4.title": "Medicina interna",
      "service4.desc": "Diagnóstico y seguimiento de enfermedades del adulto, como hipertensión, diabetes y alteraciones de la tiroides.",
      "service4.more": "El internista evalúa al paciente adulto de forma integral, especialmente cuando tiene varias condiciones de salud al mismo tiempo.\n\nDa seguimiento a la presión arterial, la glucosa, el colesterol y la función de la tiroides, y revisa que los tratamientos sean compatibles entre sí.\n\nEs una consulta adecuada para adultos mayores y para quienes desean ordenar su control médico con un solo médico de referencia.",
      "service5.title": "Cardiología",
      "service5.desc": "Evaluación del corazón y la circulación, con electrocardiograma en consulta y orientación para controlar los factores de riesgo.",
      "service5.more": "La consulta de cardiología está indicada si tiene presión alta, palpitaciones, molestias en el pecho al hacer esfuerzo o antecedentes familiares de enfermedad cardíaca.\n\nEl cardiólogo realiza la evaluación clínica y un electrocardiograma en el consultorio y, si es necesario, solicita estudios complementarios.\n\nSi presenta dolor intenso en el pecho o dificultad para respirar, acuda de inmediato a un servicio de emergencia.",
      "service6.title": "Dermatología",
      "service6.desc": "Atención de la piel, el cabello y las uñas: acné, manchas, alergias cutáneas y revisión de lunares.",
      "service6.more": "El dermatólogo evalúa y trata afecciones frecuentes de la piel, como acné, dermatitis, manchas, hongos y caída del cabello.\n\nTambién realiza la revisión periódica de lunares, recomendable si ha notado cambios de forma, color o tamaño.\n\nLe orientamos sobre el cuidado diario de la piel y la protección solar adecuada para su tipo de piel.",
      "service7.title": "Nutrición clínica",
      "service7.desc": "Planes de alimentación personalizados para el control de peso, la diabetes, el colesterol y otras necesidades de salud.",
      "service7.more": "La nutricionista revisa sus hábitos, sus medidas y, si los tiene, sus exámenes de laboratorio recientes.\n\nCon esa información elabora un plan de alimentación realista, adaptado a su rutina, a sus gustos y a las indicaciones de su médico.\n\nLas citas de seguimiento permiten ajustar el plan con el tiempo y resolver las dudas que surjan en el camino.",
      "service8.title": "Laboratorio clínico",
      "service8.desc": "Exámenes de sangre, orina y heces en la misma clínica, con indicaciones de preparación claras y resultados en línea.",
      "service8.more": "Nuestro laboratorio realiza los exámenes que su médico solicita con mayor frecuencia: hematología, química sanguínea, perfil de lípidos, orina y heces, entre otros.\n\nAntes de venir, revise si su examen requiere ayuno. Encontrará las indicaciones en la sección de exámenes de este sitio.\n\nLos resultados se entregan en línea o impresos, y su médico puede revisarlos en su próxima cita.",
      "service9.title": "Ultrasonido e imágenes",
      "service9.desc": "Ultrasonido abdominal, pélvico, obstétrico, de tiroides y de tejidos blandos, con informe para su médico tratante.",
      "service9.more": "El ultrasonido es un estudio sin radiación que permite observar órganos y tejidos en tiempo real.\n\nRealizamos ultrasonido abdominal, pélvico, obstétrico, de tiroides y de tejidos blandos. Algunos estudios requieren preparación, como ayuno o vejiga llena; se la indicaremos al agendar.\n\nEl informe se entrega a usted y a su médico tratante.",
      "service10.title": "Vacunación",
      "service10.desc": "Vacunas del esquema infantil y vacunas para adultos, con registro en su carné y recordatorio de la próxima dosis.",
      "service10.more": "Aplicamos las vacunas del esquema infantil y las vacunas recomendadas para adolescentes y adultos, según la indicación de su médico.\n\nTraiga su carné de vacunación para registrar cada dosis. Si no lo tiene, le entregamos uno nuevo.\n\nAntes de la aplicación, el personal de enfermería confirma que no haya contraindicaciones y le explica los cuidados posteriores.",
      "service11.title": "Chequeos preventivos",
      "service11.desc": "Paquetes de exámenes y consulta para conocer su estado de salud, aunque se sienta bien.",
      "service11.more": "Un chequeo preventivo permite identificar a tiempo factores de riesgo como presión alta, glucosa elevada o colesterol alto.\n\nOfrecemos chequeos para adultos, chequeos ejecutivos para empresas y control de niño sano. Cada paquete combina exámenes de laboratorio con una consulta de resultados.\n\nConsulte los precios de referencia en la sección de paquetes.",
      "maternity.eyebrow": "Control prenatal",
      "maternity.title": "Le acompañamos <em>mes a mes</em> en su embarazo",
      "maternity.desc": "Ofrecemos control prenatal con ginecología, laboratorio y ultrasonido en una misma sede, para que sus citas sean ordenadas y sin traslados. La clínica no atiende partos: cuando se acerca la fecha, su médico le orienta sobre el centro hospitalario de su elección.",
      "maternity.cta": "Agendar control prenatal",
      "projects.cta": "Descargar guía prenatal",
      "projects.cta_aria": "Descargar la guía prenatal en PDF",
      "mfeat1.title": "Citas de control programadas",
      "mfeat1.desc": "Su médico define la frecuencia de las consultas según la etapa del embarazo, y le ayudamos a agendar cada una con anticipación.",
      "mfeat2.title": "Ultrasonido obstétrico",
      "mfeat2.desc": "Estudios de ultrasonido en la misma clínica, en las semanas que indique su médico, con informe para su expediente.",
      "mfeat3.title": "Laboratorio prenatal",
      "mfeat3.desc": "Exámenes de sangre y orina del control prenatal en nuestro laboratorio, con indicaciones de preparación claras.",
      "mfeat4.title": "Orientación para el parto",
      "mfeat4.desc": "La clínica no tiene sala de partos. Su médico le orienta sobre el hospital de su preferencia y le entrega un resumen de su control.",
      "bag.title": "Qué traer a su primera cita prenatal",
      "bag.desc": "Marque cada punto a medida que lo prepara. Así su primera consulta será más ágil.",
      "bag1": "DPI y carné de su seguro, si tiene",
      "bag2": "Resultado de su prueba de embarazo",
      "bag3": "Exámenes y ultrasonidos previos",
      "bag4": "Lista de medicamentos y vitaminas que toma",
      "bag5": "Fecha de su última menstruación",
      "bag6": "Antecedentes médicos y cirugías previas",
      "bag7": "Carné de vacunación",
      "bag8": "Sus preguntas, anotadas",
      "bag9": "Ropa cómoda para el ultrasonido",
      "bag10": "Un acompañante de su confianza, si lo desea",
      "bag.note": "Si tiene sangrado o dolor intenso, acuda a una emergencia.",
      "bag.progress": "{n} de {total} listos",
      "about.eyebrow": "Quiénes somos",
      "about.title": "Una clínica pensada para su tranquilidad",
      "about.desc": "Clínica Lumen reúne consulta externa, laboratorio y ultrasonido en una sola sede de Zona 10. Trabajamos con cita previa para reducir la espera y dedicar a cada paciente el tiempo que necesita. Nuestro equipo coordina sus consultas, exámenes y resultados, para que usted tenga un solo lugar de referencia para el cuidado de su salud y la de su familia.",
      "about.art_caption": "Consulta externa, laboratorio y ultrasonido en un mismo lugar.",
      "about.mission_title": "Nuestro propósito",
      "about.mission_desc": "Ofrecer atención médica ambulatoria clara, ordenada y respetuosa, con información comprensible en cada paso y un trato cercano para cada paciente.",
      "about.vision_title": "Nuestro compromiso",
      "about.vision_desc": "Respetar su tiempo y su privacidad, explicar cada indicación con claridad y entregar sus resultados de forma segura.",
      "why.title": "Por qué elegirnos",
      "why1": "Once especialidades",
      "why2": "Laboratorio propio",
      "why3": "Ultrasonido en sede",
      "why4": "Resultados en línea",
      "why5": "Parqueo propio",
      "why6": "Atención con cita",
      "projects.eyebrow": "Instalaciones",
      "projects.title": "Espacios tranquilos y accesibles",
      "projects.desc": "Recepción, consultorios, laboratorio y ultrasonido cerca uno del otro, con ingreso sin gradas y parqueo para pacientes.",
      "projects.view_details": "Ver fotos",
      "proj1.tag": "Para su comodidad",
      "proj1.title": "Recepción y sala de espera",
      "proj1.desc": "Sala de espera iluminada, con asientos cómodos y wifi. En recepción registramos su llegada.",
      "proj2.tag": "Consulta externa",
      "proj2.title": "Consultorios",
      "proj2.desc": "Consultorios privados y equipados para cada especialidad, para conversar con calma con su médico.",
      "proj3.tag": "Diagnóstico",
      "proj3.title": "Laboratorio",
      "proj3.desc": "Área de toma de muestras con privacidad, cerca de la recepción, para que su visita sea breve.",
      "proj4.tag": "Imagen",
      "proj4.title": "Ultrasonido e imágenes",
      "proj4.desc": "Sala de ultrasonido con camilla amplia y una pantalla para que pueda ver el estudio junto a su médico.",
      "proj5.tag": "Para la familia",
      "proj5.title": "Área infantil",
      "proj5.desc": "Un rincón con juegos tranquilos y libros, junto a la sala de espera de pediatría.",
      "proj6.tag": "Acceso",
      "proj6.title": "Parqueo y acceso",
      "proj6.desc": "Parqueo para pacientes, rampa de ingreso y elevador, para una llegada cómoda.",
      "amen.title": "Para su comodidad, contamos con",
      "amen1.title": "Parqueo para pacientes",
      "amen1.desc": "Espacios de parqueo para pacientes durante su cita.",
      "amen2.title": "Recepción",
      "amen2.desc": "Personal que le orienta con citas, pagos y resultados.",
      "amen3.title": "Sala de espera",
      "amen3.desc": "Amplia e iluminada, con agua pura y asientos cómodos.",
      "amen4.title": "Acceso sin gradas",
      "amen4.desc": "Rampa y elevador para personas con movilidad reducida.",
      "amen5.title": "Laboratorio",
      "amen5.desc": "Toma de muestras en la misma sede, con resultados en línea.",
      "amen6.title": "Ultrasonido",
      "amen6.desc": "Estudios de ultrasonido con informe para su médico.",
      "amen7.title": "Área infantil",
      "amen7.desc": "Un espacio tranquilo para los niños mientras esperan.",
      "amen8.title": "Vacunación",
      "amen8.desc": "Área de enfermería para la aplicación de vacunas.",
      "amen9.title": "Lactario",
      "amen9.desc": "Un espacio privado para la lactancia.",
      "amen10.title": "Wifi para pacientes",
      "amen10.desc": "Conexión gratuita en la sala de espera.",
      "amen11.title": "Pago con tarjeta",
      "amen11.desc": "Aceptamos tarjetas de crédito y débito.",
      "amen12.title": "Seguridad",
      "amen12.desc": "Personal de seguridad en el ingreso y circuito cerrado de cámaras.",
      "projects.modal_close": "Cerrar",
      "projects.modal_prev": "Foto anterior",
      "projects.modal_next": "Foto siguiente",
      "projects.modal_dots_aria": "Elegir foto",
      "projects.modal_goto_slide": "Ir a la foto {n}",
      "projects.modal_image_of": "Foto {n} de {total}",
      "projects.modal_photo_alt": "Foto {n} de {title}",
      "projects.modal_placeholder_note": "Aún no hay fotografías de esta área.",
      "process.eyebrow": "Cómo agendar",
      "process.title": "Su cita en cuatro pasos",
      "process1.title": "Elija la especialidad",
      "process1.desc": "Solicite su cita en línea, por teléfono o por WhatsApp, e indique la especialidad o el médico que prefiere.",
      "process2.title": "Confirmamos el horario",
      "process2.desc": "Le llamamos o escribimos para confirmar la fecha, la hora y cualquier preparación necesaria.",
      "process3.title": "Llegue 15 minutos antes",
      "process3.desc": "Registre su llegada en recepción con su DPI y, si aplica, el carné de su seguro.",
      "process4.title": "Resultados y seguimiento",
      "process4.desc": "Reciba sus resultados en línea y, si su médico lo indica, agende su próxima consulta.",
      "patients.eyebrow": "Pacientes",
      "patients.title": "Todo lo que necesita saber",
      "patients.desc": "Indicaciones prácticas para que su visita sea ágil y cómoda. Si tiene dudas, llámenos en horario de atención.",
      "patients.tab1": "Antes de su cita",
      "patients.tab2": "Durante su visita",
      "patients.tab3": "Control prenatal",
      "patients.tabs_aria": "Información para pacientes",
      "visits.title": "Horario de atención",
      "visits.hours_text": "Lun–Vie 7:00–19:00 · Sáb 8:00–13:00",
      "visits.open": "Abierto ahora",
      "visits.closed": "Cerrado en este momento",
      "visits.next": "Abrimos: {time}",
      "visits.until": "Hasta las {time}",
      "guide1": "Llegue 15 minutos antes de su cita para registrarse en recepción.",
      "guide2": "Traiga su DPI y, si tiene seguro, su carné vigente.",
      "guide3": "Si es su primera consulta, traiga exámenes, recetas o informes médicos previos.",
      "guide4": "Anote los medicamentos que toma actualmente para mostrárselos a su médico.",
      "guide5": "Revise en la sección de exámenes si su estudio requiere ayuno u otra preparación.",
      "guide6": "Si no puede asistir, avísenos con al menos 24 horas de anticipación para reprogramar.",
      "guide7": "Los menores de edad deben venir acompañados de su madre, padre o encargado.",
      "guide8": "Si tiene seguro médico, verifique su cobertura antes de la cita con el formulario de esta página.",
      "guide9": "Aceptamos efectivo, tarjeta de crédito o débito y transferencia bancaria.",
      "guide10": "La clínica es un espacio libre de humo.",
      "visit1": "Si tiene gripe o tos, use mascarilla en la sala de espera; puede solicitarla en recepción.",
      "visit2": "Si llega tarde, es posible que debamos reprogramar su cita para no retrasar a otros pacientes.",
      "visit3": "Al final de la consulta recibirá sus indicaciones y recetas por escrito.",
      "visit4": "Mantenga su teléfono en silencio dentro de los consultorios.",
      "visit5": "Pregunte con confianza: su médico le explicará el diagnóstico y las indicaciones.",
      "visit6": "Antes de retirarse, pase a recepción para programar exámenes o su próxima cita.",
      "visit7": "Si necesita una constancia de su consulta para su trabajo, solicítela en recepción.",
      "visit8": "",
      "mat1": "Agende su primera consulta prenatal en cuanto tenga una prueba de embarazo positiva.",
      "mat2": "En cada control se revisan su presión arterial, su peso y el crecimiento del bebé.",
      "mat3": "Su médico le indicará en qué semanas realizar ultrasonidos y exámenes de laboratorio.",
      "mat4": "Puede venir acompañada a sus consultas y ultrasonidos.",
      "mat5": "La clínica no atiende partos; su médico le orienta sobre el hospital de su elección.",
      "mat6": "Ante sangrado, dolor intenso, fiebre o menos movimientos del bebé, acuda de inmediato a una emergencia.",
      "ext.title": "Extensiones",
      "ext1.label": "Citas",
      "ext2.label": "Laboratorio",
      "ext3.label": "Resultados",
      "ext4.label": "Facturación y seguros",
      "insurance.eyebrow": "Seguros y pagos",
      "insurance.title": "Formas de pago claras",
      "insurance.desc": "Trabajamos con aseguradoras y aceptamos varias formas de pago. Antes de su cita puede verificar su cobertura y conocer el precio de referencia de su consulta o examen.",
      "insurance.insurers_title": "Aseguradoras con convenio",
      "insurance.insurers_desc": "Si su póliza es de una de estas aseguradoras, presente su carné en recepción. Le indicaremos el copago o deducible que corresponde.",
      "insurance.missing": "¿No encuentra su aseguradora? Llámenos y lo consultamos.",
      "banks.title": "Depósitos y transferencias",
      "pay.title": "Formas de pago",
      "pay1": "Tarjeta de crédito o débito",
      "pay2": "Cuotas con tarjetas participantes",
      "pay3": "Transferencia bancaria",
      "pay4": "Efectivo",
      "pay5": "Cobro directo a aseguradoras afiliadas",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "¿Desea agendar una cita?",
      "ctabanner.desc": "Llámenos en horario de atención o escríbanos por WhatsApp y le ayudamos a encontrar un espacio.",
      "ctabanner.cta": "Llamar ahora",
      "contact.eyebrow": "Ubicación",
      "contact.title": "Contáctenos",
      "contact.desc": "Escríbanos o llámenos para agendar una cita, consultar precios o resolver sus dudas. Le respondemos en horario de atención.",
      "contact.label_address": "Dirección",
      "contact.label_phone": "Teléfonos",
      "contact.label_email": "Correo",
      "contact.label_hours": "Horario",
      "contact.label_social": "Redes sociales",
      "contact.hours_value": "Lunes a viernes 7:00–19:00 · Sábado 8:00–13:00",
      "contact.map_open": "Abrir en Google Maps",
      "contact.vcard": "Guardar contacto",
      "contact.vcard_aria": "Guardar el contacto de la clínica en su teléfono (archivo vCard)",
      "contact.waze": "Abrir en Waze",
      "contact.map_load": "Ver mapa aquí",
      "contact.map_note": "Al mostrar el mapa, Google recibe su dirección IP.",
      "contact.map_frame": "Mapa de la ubicación de la clínica",
      "contact.phone_main": "Principal",
      "contact.phone_direct": "Directo",
      "form.title": "Envíenos un mensaje",
      "form.privacy_hint": "Por su privacidad, no incluya diagnósticos, resultados ni otros datos clínicos en este formulario.",
      "form.name_label": "Nombre completo",
      "form.name_err": "Ingrese su nombre completo.",
      "form.phone_label": "Teléfono",
      "form.phone_err": "Ingrese un número de teléfono válido.",
      "form.email_label": "Correo electrónico",
      "form.email_err": "Ingrese un correo electrónico válido.",
      "form.service_label": "¿En qué podemos ayudarle?",
      "form.opt_placeholder": "Seleccione una opción",
      "form.opt_maternity": "Control prenatal",
      "form.opt_surgery": "Chequeos y paquetes",
      "form.opt_emergency": "Cita de medicina general",
      "form.opt_specialist": "Consulta con especialista",
      "form.opt_lab": "Laboratorio clínico",
      "form.opt_insurance": "Seguros y formas de pago",
      "form.opt_other": "Otro",
      "form.service_err": "Seleccione una opción.",
      "form.message_label": "Su mensaje",
      "form.message_err": "Escriba un poco más (mínimo 10 caracteres).",
      "form.optional": "(opcional)",
      "form.choose": "Seleccione una opción",
      "form.err_required": "Complete este campo.",
      "form.err_choose": "Elija una opción.",
      "form.err_number": "Ingrese un número válido.",
      "form.err_date": "Elija una fecha válida.",
      "form.consent_label": "Acepto que usen mis datos solo para responder a mi solicitud, según el Aviso de Privacidad.",
      "form.consent_err": "Necesitamos su autorización para responderle.",
      "form.hp_label": "No completar este campo",
      "form.submit": "Enviar mensaje",
      "form.note": "Usaremos sus datos únicamente para responder a su solicitud. Consulte nuestro <a href=\"privacy-notice.html\">Aviso de Privacidad</a>.",
      "form.fallback": "¿Prefiere no usar el formulario? Escríbanos por <a href=\"tel:+50200000000\">teléfono</a>, <a href=\"mailto:citas@clinica-lumen.example\">correo</a> o <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Enviando…",
      "form.status_ok": "¡Gracias! Recibimos su mensaje y le contactaremos pronto.",
      "form.status_invalid": "Revise los campos marcados antes de enviar.",
      "form.status_error": "Hubo un problema al enviar su mensaje. Intente de nuevo o escríbanos por WhatsApp.",
      "form.status_rate_limited": "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos e intente de nuevo.",
      "form.status_offline": "Parece que no tiene conexión a internet. Revise su conexión e intente de nuevo.",
      "form.status_timeout": "El envío tardó demasiado. Revise su conexión e intente de nuevo.",
      "form.status_verifying": "Verificando que no es un robot…",
      "form.status_captcha": "No pudimos completar la verificación anti-spam. Recargue la página e intente de nuevo, o escríbanos por WhatsApp.",
      "form.status_turnstile": "Complete la verificación de seguridad y vuelva a enviar.",
      "form.captcha_idle": "Protegido contra spam con verificación automática.",
      "form.captcha_pending": "Verificación anti-spam en curso…",
      "form.captcha_ok": "Verificación anti-spam completa.",
      "form.captcha_error": "No se pudo cargar la verificación anti-spam. Recargue la página.",
      "faq.eyebrow": "Preguntas frecuentes",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Cómo agendo una cita?",
      "faq.a1": "Puede solicitarla con el formulario de citas de este sitio, por teléfono o por WhatsApp. Le confirmaremos la fecha y la hora disponibles, y le indicaremos si necesita alguna preparación.",
      "faq.q2": "¿Trabajan con seguros médicos?",
      "faq.a2": "Sí. Tenemos convenio con Aseguradora Demo Uno, Aseguradora Demo Dos, Aseguradora Demo Tres y Aseguradora Demo Cuatro. Le recomendamos verificar su cobertura antes de la cita con el formulario de la sección «Seguros y pagos».",
      "faq.q3": "¿Cuánto cuesta una consulta y cómo puedo pagar?",
      "faq.a3": "Como referencia, la consulta de medicina general tiene un costo aproximado de Q 350 y la de especialidad, de Q 450. Al agendar le confirmamos el precio vigente. Aceptamos efectivo, tarjeta de crédito o débito y transferencia bancaria.",
      "faq.q4": "¿Cómo recibo mis resultados de laboratorio?",
      "faq.a4": "Le enviamos un enlace seguro para consultarlos en línea en cuanto estén listos. Si lo prefiere, puede recogerlos impresos en recepción presentando su DPI. El tiempo de entrega de cada examen aparece en la sección de exámenes.",
      "faq.q5": "¿Hay parqueo para pacientes?",
      "faq.a5": "Sí. La clínica cuenta con parqueo para pacientes durante su cita y con ingreso sin gradas. Vea la ubicación en la sección Contacto.",
      "faq.q6": "¿Atienden a niños?",
      "faq.a6": "Sí. Nuestro servicio de pediatría atiende desde recién nacidos hasta adolescentes, con control de niño sano, consultas por enfermedad y vacunación. Los menores deben venir acompañados de un adulto responsable.",
      "faq.q7": "¿Cómo cancelo o cambio mi cita?",
      "faq.a7": "Llámenos o escríbanos por WhatsApp con al menos 24 horas de anticipación. Así podemos ofrecer el espacio a otro paciente y reprogramar su cita en el horario que le convenga.",
      "faq.q8": "¿Atienden emergencias?",
      "faq.a8": "No. Clínica Lumen ofrece consulta externa con cita previa. Ante una emergencia médica, acuda de inmediato al servicio de emergencia más cercano.",
      "a11y.title": "Accesibilidad",
      "a11y.desc": "Ajuste el sitio a su comodidad. Sus preferencias se guardan en este dispositivo.",
      "a11y.text_size": "Tamaño del texto",
      "a11y.contrast": "Alto contraste",
      "a11y.motion": "Reducir animaciones",
      "a11y.links": "Subrayar enlaces",
      "a11y.spacing": "Texto más espaciado",
      "a11y.reset": "Restablecer",
      "footer.about_desc": "Consulta externa, especialidades, laboratorio y ultrasonido en Zona 10, con atención clara y cercana.",
      "footer.links_heading": "Navegación",
      "footer.services_heading": "Servicios",
      "footer.contact_heading": "Contacto",
      "footer.privacy_link": "Aviso de Privacidad",
      "footer.rights": "Todos los derechos reservados.",
      "footer.made_by": "Sitio administrado por TeraDevs",
      "notice.text": "",
      "notice.close": "Cerrar aviso",
      "notice.label": "Aviso",
      "doctors.eyebrow": "Directorio médico",
      "doctors.title": "Nuestros médicos",
      "doctors.desc": "Busque por nombre o especialidad y solicite su cita con el médico de su preferencia.",
      "doctors.cta": "Pedir cita",
      "doctors.search_label": "Buscar médico",
      "doctors.search_ph": "Nombre o especialidad",
      "doctors.filter_aria": "Filtrar por especialidad",
      "doctors.all": "Todas",
      "doctors.empty": "No encontramos médicos con esa búsqueda.",
      "doctors.license": "Colegiado",
      "doctors.hours": "Horario",
      "doctors.insurers": "Seguros",
      "doctors.request": "Solicitar en línea",
      "doctors.wa_msg": "Hola, quisiera una cita con {name} ({specialty}) en Clínica Lumen.",
      "doctors.results": "{n} médicos",
      "doctors.result1": "1 médico",
      "appt.eyebrow": "Citas",
      "appt.title": "",
      "appt.desc": "Elija la especialidad y la fecha que prefiere. Le llamaremos para confirmar el horario disponible.",
      "appt.submit": "Solicitar cita",
      "appt.ok": "¡Gracias! Recibimos su solicitud. Le llamaremos para confirmar la fecha y la hora de su cita.",
      "appt.specialty_label": "Especialidad",
      "appt.doctor_label": "Médico",
      "appt.doctor_any": "Cualquier médico disponible",
      "appt.date_label": "Fecha preferida",
      "appt.time_label": "Horario preferido",
      "appt.time_morning": "Mañana",
      "appt.time_afternoon": "Tarde",
      "appt.time_any": "Cualquiera",
      "req.name_label": "Nombre del paciente",
      "req.phone_label": "Teléfono",
      "req.email_label": "Correo electrónico",
      "req.notes_label": "Comentarios",
      "req.health_notice": "Por su privacidad, no incluya diagnósticos, resultados ni otros datos clínicos: solo lo necesario para atender su solicitud.",
      "pkg.eyebrow": "Paquetes",
      "pkg.title": "Chequeos y precios de referencia",
      "pkg.desc": "Conozca de antemano el costo aproximado de los chequeos más solicitados.",
      "pkg.from": "Desde",
      "pkg.cta": "Solicitar información",
      "pkg.note": "Precios de referencia en quetzales, sujetos a cambios. Le confirmamos el precio vigente al agendar.",
      "pkg.includes": "Incluye",
      "pkg.pdf": "Descargar precios en PDF",
      "comp.title": "",
      "labprep.eyebrow": "Exámenes",
      "labprep.title": "Cómo prepararse para sus exámenes",
      "labprep.desc": "Siga estas indicaciones para que sus resultados sean confiables. Si tiene dudas, llámenos antes de venir.",
      "labprep.time": "Resultados",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Envíenos los datos de su póliza y le confirmaremos su cobertura antes de su cita.",
      "insck.submit": "Verificar cobertura",
      "insck.ok": "¡Gracias! Revisaremos su cobertura y le llamaremos con la respuesta.",
      "insck.insurer_label": "Aseguradora",
      "insck.other": "Otra aseguradora",
      "insck.policy_label": "Número de póliza o carné",
      "insck.holder_label": "Nombre del asegurado",
      "insck.service_label": "Servicio que necesita",
      "reviews.eyebrow": "Opiniones",
      "reviews.title": "Lo que dicen nuestros pacientes",
      "reviews.based": "Calificación en Google",
      "reviews.cta": "Deje su opinión en Google",
      "reviews.stars_aria": "{n} de 5 estrellas",
      "reviews.count_text": "{n} opiniones",
      "ctabanner.directions": "Cómo llegar a la clínica",
      "actions.emergency": "Llamar",
      "svcpage.back": "Volver al inicio",
      "svcpage.doctors": "Médicos de esta especialidad",
      "svcpage.request_title": "¿Necesita una cita?",
      "svcpage.request_desc": "Solicítela en línea, escríbanos por WhatsApp o llámenos.",
      "svcpage.more_services": "Otros servicios",
      "services.page": "Ver página de {name}",
      "nav.doctors": "Médicos",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hola, quisiera información sobre una cita en Clínica Lumen.",
      "brand.tagline": "Especialidades médicas",
      "nav.packages": "Chequeos",
      "profile.specialty": "Especialidad",
      "demo.banner": "Sitio de demostración: la clínica, las personas y los datos son ficticios.",
      "demo.banner_cta": "Quiero un sitio así",
      "demo.form_ok": "Vista previa: así confirmaría el envío. En el sitio real, la solicitud llega al panel de la clínica y a su correo.",
      "demo.preview_label": "Vista previa",
      "demo.view_aria": "Ver otra versión de la demostración",
      "demo.view_clinic": "Clínica",
      "demo.view_practice": "Consultorio"
    },
    en: {
      "meta.title": "Clínica Lumen · Medical specialties in Zone 10",
      "meta.description": "Outpatient clinic in Zone 10: general medicine, paediatrics, gynaecology, cardiology, laboratory and ultrasound. Appointments Monday to Saturday.",
      "og.locale": "en_US",
      "brand.aria": "Clínica Lumen, go to home",
      "lang.toggle_aria": "Switch language to Spanish",
      "lang.switch_to": "Español",
      "menu.open_aria": "Open menu",
      "menu.close_aria": "Close menu",
      "mobilenav.aria": "Main menu",
      "skip": "Skip to content",
      "backtotop.aria": "Back to top",
      "a11y.new_tab": " (opens in a new tab)",
      "a11y.open_aria": "Accessibility options",
      "a11y.close": "Done",
      "a11y.size_small": "Normal text",
      "a11y.size_medium": "Large text",
      "a11y.size_large": "Extra large text",
      "actions.call": "Call",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Directions",
      "actions.aria": "Quick actions",
      "whatsapp.aria": "Message us on WhatsApp (opens in a new tab)",
      "contact.map_aria": "Open the clinic's location in Google Maps (opens in a new tab)",
      "nav.services": "Services",
      "nav.maternity": "Prenatal care",
      "nav.facilities": "Facilities",
      "nav.patients": "Patients",
      "nav.insurance": "Insurance",
      "nav.contact": "Contact",
      "nav.emergency": "Call",
      "hero.eyebrow": "Zone 10 · Outpatient care and specialties",
      "hero.title": "Your health, cared for with <em>calm</em> and precision",
      "hero.desc": "Eleven specialties, a laboratory and ultrasound under one roof in Zone 10. Book your appointment online, by phone or on WhatsApp.",
      "hero.cta1": "Book an appointment",
      "hero.cta2": "Message us on WhatsApp",
      "hero.status": "Open Monday to Saturday",
      "hero.badge1": "Patient parking",
      "hero.badge2": "Results online",
      "hero.badge3": "Insurance accepted",
      "quick.emergency": "Call the clinic",
      "quick.whatsapp": "Direct WhatsApp",
      "quick.visits": "Opening hours",
      "quick.directions": "Directions",
      "quick.aria": "Quick information",
      "stat1.value": "11",
      "stat1.label": "specialties and services",
      "stat2.value": "8",
      "stat2.label": "doctors in our directory",
      "stat3.value": "Mon–Sat",
      "stat3.label": "appointments available",
      "stat4.value": "1",
      "stat4.label": "accessible location in Zone 10",
      "services.eyebrow": "Services",
      "services.title": "Specialties and services",
      "services.desc": "Specialist consultations, a clinical laboratory and ultrasound in one place, so your care is well organised and free of unnecessary trips.",
      "services.cta": "Ask on WhatsApp",
      "services.more": "Learn more",
      "services.more_aria": "Learn more about {name}",
      "services.call": "Call",
      "services.close": "Close",
      "service1.title": "General medicine",
      "service1.desc": "Consultations for common symptoms, follow-up of chronic conditions and guidance on the right specialist.",
      "service1.more": "General medicine is a good place to start when you are not sure which specialist to see. The doctor reviews your symptoms, your medical history and the medicines you take.\n\nWe see common complaints, blood pressure and glucose check-ups, medical certificates and treatment follow-up.\n\nIf needed, we refer you to the right specialist within the clinic and arrange the tests you need.",
      "service2.title": "Paediatrics",
      "service2.desc": "Well-child checkups, growth monitoring and care for common childhood illnesses, from birth to adolescence.",
      "service2.more": "In paediatrics we follow your children's growth with regular weight, height and development checks.\n\nWe see children for fever, cough, stomach complaints and other common childhood illnesses, and we guide families on feeding, sleep and vaccination.\n\nEach appointment allows enough time for your child to feel at ease and for you to ask your questions.",
      "service3.title": "Gynaecology and obstetrics",
      "service3.desc": "Annual gynaecological checkups, prenatal care, family planning and care for gynaecological concerns, with respect and privacy.",
      "service3.more": "Gynaecology visits include the annual checkup, the Pap smear and family planning advice.\n\nIn obstetrics we offer prenatal care with ultrasound and laboratory tests at the clinic. As your due date approaches, your doctor will advise you on the hospital where you will give birth.\n\nRegular visits to your gynaecologist are an important part of looking after your health.",
      "service4.title": "Internal medicine",
      "service4.desc": "Diagnosis and follow-up of adult conditions such as high blood pressure, diabetes and thyroid disorders.",
      "service4.more": "The internist looks at the adult patient as a whole, especially when several health conditions are present at once.\n\nThey follow blood pressure, glucose, cholesterol and thyroid function, and check that your treatments work well together.\n\nIt is a good choice for older adults and for anyone who wants one doctor to coordinate their medical care.",
      "service5.title": "Cardiology",
      "service5.desc": "Heart and circulation assessment, with an in-office ECG and guidance on managing risk factors.",
      "service5.more": "A cardiology visit is advisable if you have high blood pressure, palpitations, chest discomfort on exertion or a family history of heart disease.\n\nThe cardiologist carries out a clinical assessment and an ECG in the office and, if needed, orders further tests.\n\nIf you have severe chest pain or difficulty breathing, go to an emergency department immediately.",
      "service6.title": "Dermatology",
      "service6.desc": "Care for skin, hair and nails: acne, dark spots, skin allergies and mole checks.",
      "service6.more": "The dermatologist assesses and treats common skin conditions such as acne, dermatitis, dark spots, fungal infections and hair loss.\n\nThey also carry out regular mole checks, advisable if you have noticed changes in shape, colour or size.\n\nWe advise you on daily skin care and the right sun protection for your skin type.",
      "service7.title": "Clinical nutrition",
      "service7.desc": "Personalised eating plans for weight management, diabetes, cholesterol and other health needs.",
      "service7.more": "The nutritionist reviews your habits, your measurements and, if available, your recent lab results.\n\nWith that information she prepares a realistic eating plan that fits your routine, your tastes and your doctor's advice.\n\nFollow-up visits let you adjust the plan over time and resolve any questions along the way.",
      "service8.title": "Clinical laboratory",
      "service8.desc": "Blood, urine and stool tests at the clinic, with clear preparation instructions and results online.",
      "service8.more": "Our laboratory performs the tests doctors order most often: complete blood count, blood chemistry, lipid panel, urine and stool tests, among others.\n\nBefore you come, check whether your test requires fasting. You will find the instructions in the tests section of this site.\n\nResults are delivered online or on paper, and your doctor can review them at your next visit.",
      "service9.title": "Ultrasound and imaging",
      "service9.desc": "Abdominal, pelvic, obstetric, thyroid and soft-tissue ultrasound, with a report for your doctor.",
      "service9.more": "Ultrasound is a radiation-free scan that shows organs and tissues in real time.\n\nWe perform abdominal, pelvic, obstetric, thyroid and soft-tissue ultrasound. Some scans need preparation, such as fasting or a full bladder; we will tell you when you book.\n\nThe report is given to you and to your doctor.",
      "service10.title": "Vaccination",
      "service10.desc": "Childhood and adult vaccines, recorded on your vaccination card with a reminder for the next dose.",
      "service10.more": "We give childhood vaccines and the vaccines recommended for teenagers and adults, as advised by your doctor.\n\nBring your vaccination card so we can record each dose. If you do not have one, we will give you a new one.\n\nBefore each vaccine, our nursing staff checks for contraindications and explains aftercare.",
      "service11.title": "Preventive checkups",
      "service11.desc": "Test packages with a consultation to understand your health, even when you feel well.",
      "service11.more": "A preventive checkup helps spot risk factors such as high blood pressure, high glucose or high cholesterol early.\n\nWe offer adult checkups, executive checkups for companies and well-child visits. Each package combines laboratory tests with a results consultation.\n\nSee the reference prices in the packages section.",
      "maternity.eyebrow": "Prenatal care",
      "maternity.title": "With you <em>month by month</em> through pregnancy",
      "maternity.desc": "We offer prenatal care with gynaecology, laboratory and ultrasound at one location, so your visits are well organised and free of extra trips. The clinic does not attend births: as your due date approaches, your doctor will advise you on the hospital of your choice.",
      "maternity.cta": "Book a prenatal visit",
      "projects.cta": "Download the prenatal guide",
      "projects.cta_aria": "Download the prenatal guide as a PDF",
      "mfeat1.title": "Scheduled check-ups",
      "mfeat1.desc": "Your doctor sets how often you need a visit at each stage of pregnancy, and we help you book each one in advance.",
      "mfeat2.title": "Obstetric ultrasound",
      "mfeat2.desc": "Ultrasound scans at the clinic, in the weeks your doctor recommends, with a report for your file.",
      "mfeat3.title": "Prenatal lab tests",
      "mfeat3.desc": "Prenatal blood and urine tests in our laboratory, with clear preparation instructions.",
      "mfeat4.title": "Planning for the birth",
      "mfeat4.desc": "The clinic has no delivery room. Your doctor advises you on the hospital of your choice and gives you a summary of your prenatal care.",
      "bag.title": "What to bring to your first visit",
      "bag.desc": "Tick each item as you get it ready. It will make your first visit smoother.",
      "bag1": "ID and insurance card, if you have one",
      "bag2": "Your pregnancy test result",
      "bag3": "Previous tests and ultrasound reports",
      "bag4": "A list of medicines and vitamins you take",
      "bag5": "The date of your last period",
      "bag6": "Your medical history and past surgeries",
      "bag7": "Vaccination card",
      "bag8": "Your questions, written down",
      "bag9": "Comfortable clothes for the ultrasound",
      "bag10": "Someone you trust, if you wish",
      "bag.note": "If you have bleeding or severe pain, go to an emergency room.",
      "bag.progress": "{n} of {total} ready",
      "about.eyebrow": "About us",
      "about.title": "A clinic designed for your peace of mind",
      "about.desc": "Clínica Lumen brings outpatient consultations, a laboratory and ultrasound together at one location in Zone 10. We work by appointment to keep waiting times short and give each patient the time they need. Our team coordinates your visits, tests and results, so you have one place to turn to for your health and your family's.",
      "about.art_caption": "Outpatient care, laboratory and ultrasound in one place.",
      "about.mission_title": "Our purpose",
      "about.mission_desc": "To provide clear, well-organised and respectful outpatient care, with understandable information at every step and a personal approach for every patient.",
      "about.vision_title": "Our commitment",
      "about.vision_desc": "To respect your time and your privacy, explain every instruction clearly and deliver your results securely.",
      "why.title": "Why choose us",
      "why1": "Eleven specialties",
      "why2": "On-site laboratory",
      "why3": "On-site ultrasound",
      "why4": "Results online",
      "why5": "On-site parking",
      "why6": "By appointment",
      "projects.eyebrow": "Facilities",
      "projects.title": "Calm, accessible spaces",
      "projects.desc": "Reception, consulting rooms, laboratory and ultrasound close to one another, with step-free access and patient parking.",
      "projects.view_details": "View photos",
      "proj1.tag": "For your comfort",
      "proj1.title": "Reception and waiting room",
      "proj1.desc": "A bright waiting room with comfortable seating and wifi. Reception checks you in on arrival.",
      "proj2.tag": "Outpatient care",
      "proj2.title": "Consulting rooms",
      "proj2.desc": "Private, equipped rooms for each specialty, designed for an unhurried conversation with your doctor.",
      "proj3.tag": "Diagnostics",
      "proj3.title": "Laboratory",
      "proj3.desc": "A private sample collection area near reception, to keep your visit short.",
      "proj4.tag": "Imaging",
      "proj4.title": "Ultrasound and imaging",
      "proj4.desc": "An ultrasound room with a wide couch and a screen so you can follow the scan with your doctor.",
      "proj5.tag": "For families",
      "proj5.title": "Children's corner",
      "proj5.desc": "A corner with quiet games and books, next to the paediatrics waiting area.",
      "proj6.tag": "Access",
      "proj6.title": "Parking and access",
      "proj6.desc": "Patient parking, an entrance ramp and a lift, for an easy arrival.",
      "amen.title": "For your comfort, we offer",
      "amen1.title": "Patient parking",
      "amen1.desc": "Parking spaces for patients during their appointment.",
      "amen2.title": "Reception",
      "amen2.desc": "Staff to help you with appointments, payments and results.",
      "amen3.title": "Waiting room",
      "amen3.desc": "Spacious and bright, with drinking water and comfortable seating.",
      "amen4.title": "Step-free access",
      "amen4.desc": "A ramp and lift for people with reduced mobility.",
      "amen5.title": "Laboratory",
      "amen5.desc": "Sample collection on site, with results online.",
      "amen6.title": "Ultrasound",
      "amen6.desc": "Ultrasound scans with a report for your doctor.",
      "amen7.title": "Children's corner",
      "amen7.desc": "A quiet space for children while they wait.",
      "amen8.title": "Vaccination",
      "amen8.desc": "A nursing area for vaccinations.",
      "amen9.title": "Nursing room",
      "amen9.desc": "A private space for breastfeeding.",
      "amen10.title": "Patient wifi",
      "amen10.desc": "Free connection in the waiting room.",
      "amen11.title": "Card payments",
      "amen11.desc": "We accept credit and debit cards.",
      "amen12.title": "Security",
      "amen12.desc": "Security staff at the entrance and CCTV cameras.",
      "projects.modal_close": "Close",
      "projects.modal_prev": "Previous photo",
      "projects.modal_next": "Next photo",
      "projects.modal_dots_aria": "Choose photo",
      "projects.modal_goto_slide": "Go to photo {n}",
      "projects.modal_image_of": "Photo {n} of {total}",
      "projects.modal_photo_alt": "Photo {n} of {title}",
      "projects.modal_placeholder_note": "There are no photos of this area yet.",
      "process.eyebrow": "How to book",
      "process.title": "Your appointment in four steps",
      "process1.title": "Choose the specialty",
      "process1.desc": "Request your appointment online, by phone or on WhatsApp, and tell us the specialty or doctor you prefer.",
      "process2.title": "We confirm the time",
      "process2.desc": "We call or message you to confirm the date, the time and any preparation needed.",
      "process3.title": "Arrive 15 minutes early",
      "process3.desc": "Check in at reception with your ID and, if applicable, your insurance card.",
      "process4.title": "Results and follow-up",
      "process4.desc": "Receive your results online and, if your doctor advises, book your next visit.",
      "patients.eyebrow": "Patients",
      "patients.title": "Everything you need to know",
      "patients.desc": "Practical tips for a smooth, comfortable visit. If you have questions, call us during opening hours.",
      "patients.tab1": "Before your visit",
      "patients.tab2": "During your visit",
      "patients.tab3": "Prenatal care",
      "patients.tabs_aria": "Patient information",
      "visits.title": "Opening hours",
      "visits.hours_text": "Mon–Fri 7:00–19:00 · Sat 8:00–13:00",
      "visits.open": "Open now",
      "visits.closed": "Closed right now",
      "visits.next": "Opens: {time}",
      "visits.until": "Until {time}",
      "guide1": "Arrive 15 minutes before your appointment to check in at reception.",
      "guide2": "Bring your ID and, if you are insured, your current insurance card.",
      "guide3": "If it is your first visit, bring previous tests, prescriptions or medical reports.",
      "guide4": "Write down the medicines you currently take to show your doctor.",
      "guide5": "Check the tests section to see whether your test needs fasting or other preparation.",
      "guide6": "If you cannot attend, let us know at least 24 hours in advance so we can reschedule.",
      "guide7": "Minors must be accompanied by a parent or guardian.",
      "guide8": "If you have health insurance, check your coverage before your visit using the form on this page.",
      "guide9": "We accept cash, credit or debit cards and bank transfers.",
      "guide10": "The clinic is a smoke-free space.",
      "visit1": "If you have a cold or a cough, please wear a mask in the waiting room; you can ask for one at reception.",
      "visit2": "If you arrive late, we may need to reschedule your appointment so other patients are not delayed.",
      "visit3": "At the end of your visit you will receive your instructions and prescriptions in writing.",
      "visit4": "Please keep your phone on silent in the consulting rooms.",
      "visit5": "Feel free to ask: your doctor will explain the diagnosis and instructions.",
      "visit6": "Before you leave, stop at reception to schedule tests or your next appointment.",
      "visit7": "If you need a note of attendance for work, ask for it at reception.",
      "visit8": "",
      "mat1": "Book your first prenatal visit as soon as you have a positive pregnancy test.",
      "mat2": "At each visit we check your blood pressure, your weight and the baby's growth.",
      "mat3": "Your doctor will tell you in which weeks to have ultrasounds and lab tests.",
      "mat4": "You are welcome to bring someone to your visits and scans.",
      "mat5": "The clinic does not attend births; your doctor will advise you on the hospital of your choice.",
      "mat6": "If you have bleeding, severe pain, fever or the baby moves less, go to an emergency room immediately.",
      "ext.title": "Extensions",
      "ext1.label": "Appointments",
      "ext2.label": "Laboratory",
      "ext3.label": "Results",
      "ext4.label": "Billing and insurance",
      "insurance.eyebrow": "Insurance and payments",
      "insurance.title": "Clear payment options",
      "insurance.desc": "We work with insurers and accept several payment methods. Before your visit you can check your coverage and see the reference price of your consultation or test.",
      "insurance.insurers_title": "Partner insurers",
      "insurance.insurers_desc": "If your policy is with one of these insurers, show your card at reception. We will tell you the co-payment or deductible that applies.",
      "insurance.missing": "Can't find your insurer? Call us and we'll check.",
      "banks.title": "Deposits and transfers",
      "pay.title": "Payment methods",
      "pay1": "Credit or debit card",
      "pay2": "Instalments with participating cards",
      "pay3": "Bank transfer",
      "pay4": "Cash",
      "pay5": "Direct billing to partner insurers",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "Would you like to book a visit?",
      "ctabanner.desc": "Call us during opening hours or message us on WhatsApp and we will help you find a slot.",
      "ctabanner.cta": "Call now",
      "contact.eyebrow": "Location",
      "contact.title": "Contact us",
      "contact.desc": "Write or call us to book an appointment, ask about prices or get answers to your questions. We reply during opening hours.",
      "contact.label_address": "Address",
      "contact.label_phone": "Phones",
      "contact.label_email": "Email",
      "contact.label_hours": "Hours",
      "contact.label_social": "Social media",
      "contact.hours_value": "Monday to Friday 7:00–19:00 · Saturday 8:00–13:00",
      "contact.map_open": "Open in Google Maps",
      "contact.vcard": "Save contact",
      "contact.vcard_aria": "Save the clinic's contact to your phone (vCard file)",
      "contact.waze": "Open in Waze",
      "contact.map_load": "Show map here",
      "contact.map_note": "Showing the map sends your IP address to Google.",
      "contact.map_frame": "Map of the clinic's location",
      "contact.phone_main": "Main",
      "contact.phone_direct": "Direct",
      "form.title": "Send us a message",
      "form.privacy_hint": "For your privacy, please don't include diagnoses, test results or other clinical details in this form.",
      "form.name_label": "Full name",
      "form.name_err": "Enter your full name.",
      "form.phone_label": "Phone",
      "form.phone_err": "Enter a valid phone number.",
      "form.email_label": "Email address",
      "form.email_err": "Enter a valid email address.",
      "form.service_label": "How can we help?",
      "form.opt_placeholder": "Choose an option",
      "form.opt_maternity": "Prenatal care",
      "form.opt_surgery": "Checkups and packages",
      "form.opt_emergency": "General medicine appointment",
      "form.opt_specialist": "Specialist consultation",
      "form.opt_lab": "Clinical laboratory",
      "form.opt_insurance": "Insurance and payment",
      "form.opt_other": "Other",
      "form.service_err": "Choose an option.",
      "form.message_label": "Your message",
      "form.message_err": "Please write a little more (at least 10 characters).",
      "form.optional": "(optional)",
      "form.choose": "Choose an option",
      "form.err_required": "Complete this field.",
      "form.err_choose": "Choose an option.",
      "form.err_number": "Enter a valid number.",
      "form.err_date": "Choose a valid date.",
      "form.consent_label": "I agree that my details are used only to answer my request, as described in the Privacy Notice.",
      "form.consent_err": "We need your permission to reply.",
      "form.hp_label": "Leave this field empty",
      "form.submit": "Send message",
      "form.note": "We'll only use your details to answer your request. See our <a href=\"privacy-notice.html\">Privacy Notice</a>.",
      "form.fallback": "Prefer not to use the form? Reach us by <a href=\"tel:+50200000000\">phone</a>, <a href=\"mailto:citas@clinica-lumen.example\">email</a>, or <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Sending…",
      "form.status_ok": "Thank you! We received your message and will contact you soon.",
      "form.status_invalid": "Please check the highlighted fields before sending.",
      "form.status_error": "There was a problem sending your message. Try again or message us on WhatsApp.",
      "form.status_rate_limited": "You've sent several requests in a short time. Please wait a few minutes and try again.",
      "form.status_offline": "You seem to be offline. Check your connection and try again.",
      "form.status_timeout": "Sending took too long. Check your connection and try again.",
      "form.status_verifying": "Checking that you're not a robot…",
      "form.status_captcha": "We couldn't complete the anti-spam check. Reload the page and try again, or message us on WhatsApp.",
      "form.status_turnstile": "Complete the security check and send again.",
      "form.captcha_idle": "Protected against spam with an automatic check.",
      "form.captcha_pending": "Anti-spam check in progress…",
      "form.captcha_ok": "Anti-spam check complete.",
      "form.captcha_error": "The anti-spam check couldn't load. Reload the page.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "How do I book an appointment?",
      "faq.a1": "You can request one with the appointment form on this site, by phone or on WhatsApp. We will confirm the available date and time and let you know if any preparation is needed.",
      "faq.q2": "Do you work with health insurers?",
      "faq.a2": "Yes. We have agreements with Aseguradora Demo Uno, Aseguradora Demo Dos, Aseguradora Demo Tres and Aseguradora Demo Cuatro. We recommend checking your coverage before your visit with the form in the \"Insurance and payments\" section.",
      "faq.q3": "How much does a visit cost and how can I pay?",
      "faq.a3": "As a guide, a general medicine visit costs about Q 350 and a specialist visit about Q 450. We confirm the current price when you book. We accept cash, credit or debit cards and bank transfers.",
      "faq.q4": "How do I get my lab results?",
      "faq.a4": "We send you a secure link to view them online as soon as they are ready. If you prefer, you can collect a printed copy at reception by showing your ID. The turnaround time for each test is listed in the tests section.",
      "faq.q5": "Is there patient parking?",
      "faq.a5": "Yes. The clinic has parking for patients during their appointment and step-free access. See the location in the Contact section.",
      "faq.q6": "Do you see children?",
      "faq.a6": "Yes. Our paediatrics service sees patients from newborns to teenagers, with well-child checkups, sick visits and vaccination. Minors must come with a responsible adult.",
      "faq.q7": "How do I cancel or change my appointment?",
      "faq.a7": "Call us or message us on WhatsApp at least 24 hours in advance. That way we can offer the slot to another patient and reschedule your visit at a time that suits you.",
      "faq.q8": "Do you handle emergencies?",
      "faq.a8": "No. Clínica Lumen provides outpatient care by appointment. In a medical emergency, go to the nearest emergency department immediately.",
      "a11y.title": "Accessibility",
      "a11y.desc": "Adjust the site to suit you. Your preferences are saved on this device.",
      "a11y.text_size": "Text size",
      "a11y.contrast": "High contrast",
      "a11y.motion": "Reduce motion",
      "a11y.links": "Underline links",
      "a11y.spacing": "More text spacing",
      "a11y.reset": "Reset",
      "footer.about_desc": "Outpatient care, specialties, laboratory and ultrasound in Zone 10, with clear and personal attention.",
      "footer.links_heading": "Navigation",
      "footer.services_heading": "Services",
      "footer.contact_heading": "Contact",
      "footer.privacy_link": "Privacy Notice",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Site managed by TeraDevs",
      "notice.text": "",
      "notice.close": "Close notice",
      "notice.label": "Notice",
      "doctors.eyebrow": "Medical directory",
      "doctors.title": "Our doctors",
      "doctors.desc": "Search by name or specialty and request an appointment with the doctor of your choice.",
      "doctors.cta": "Book appointment",
      "doctors.search_label": "Find a doctor",
      "doctors.search_ph": "Name or specialty",
      "doctors.filter_aria": "Filter by specialty",
      "doctors.all": "All",
      "doctors.empty": "No doctors match your search.",
      "doctors.license": "License no.",
      "doctors.hours": "Hours",
      "doctors.insurers": "Insurance",
      "doctors.request": "Request online",
      "doctors.wa_msg": "Hello, I'd like an appointment with {name} ({specialty}) at Clínica Lumen.",
      "doctors.results": "{n} doctors",
      "doctors.result1": "1 doctor",
      "appt.eyebrow": "Appointments",
      "appt.title": "",
      "appt.desc": "Choose the specialty and your preferred date. We will call you to confirm an available time.",
      "appt.submit": "Request appointment",
      "appt.ok": "Thank you! We received your request. We will call you to confirm the date and time of your appointment.",
      "appt.specialty_label": "Specialty",
      "appt.doctor_label": "Doctor",
      "appt.doctor_any": "Any available doctor",
      "appt.date_label": "Preferred date",
      "appt.time_label": "Preferred time",
      "appt.time_morning": "Morning",
      "appt.time_afternoon": "Afternoon",
      "appt.time_any": "Any",
      "req.name_label": "Patient's name",
      "req.phone_label": "Phone",
      "req.email_label": "Email",
      "req.notes_label": "Comments",
      "req.health_notice": "For your privacy, please don't include diagnoses, test results or other clinical details — only what we need to handle your request.",
      "pkg.eyebrow": "Packages",
      "pkg.title": "Checkups and reference prices",
      "pkg.desc": "See the approximate cost of our most requested checkups in advance.",
      "pkg.from": "From",
      "pkg.cta": "Request information",
      "pkg.note": "Reference prices in quetzales, subject to change. We confirm the current price when you book.",
      "pkg.includes": "Includes",
      "pkg.pdf": "Download price list (PDF)",
      "comp.title": "",
      "labprep.eyebrow": "Exams",
      "labprep.title": "How to prepare for your exams",
      "labprep.desc": "Follow these instructions so your results are reliable. If in doubt, call us before you come.",
      "labprep.time": "Results",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Send us your policy details and we will confirm your coverage before your visit.",
      "insck.submit": "Check coverage",
      "insck.ok": "Thank you! We will review your coverage and call you back with the answer.",
      "insck.insurer_label": "Insurance company",
      "insck.other": "Other insurer",
      "insck.policy_label": "Policy or member number",
      "insck.holder_label": "Policyholder's name",
      "insck.service_label": "Service you need",
      "reviews.eyebrow": "Reviews",
      "reviews.title": "What our patients say",
      "reviews.based": "Google rating",
      "reviews.cta": "Leave a review on Google",
      "reviews.stars_aria": "{n} out of 5 stars",
      "reviews.count_text": "{n} reviews",
      "ctabanner.directions": "Directions to the clinic",
      "actions.emergency": "Call",
      "svcpage.back": "Back to home",
      "svcpage.doctors": "Doctors in this specialty",
      "svcpage.request_title": "Need an appointment?",
      "svcpage.request_desc": "Request it online, message us on WhatsApp or call us.",
      "svcpage.more_services": "Other services",
      "services.page": "{name} page",
      "nav.doctors": "Doctors",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hello, I'd like information about an appointment at Clínica Lumen.",
      "brand.tagline": "Medical specialties",
      "nav.packages": "Check-ups",
      "profile.specialty": "Specialty",
      "demo.banner": "Demo site: the clinic, people and details are fictional.",
      "demo.banner_cta": "I want a site like this",
      "demo.form_ok": "Preview: this is how the form confirms a message. On the real site, the request reaches the clinic's panel and inbox.",
      "demo.preview_label": "Preview",
      "demo.view_aria": "See another version of the demo",
      "demo.view_clinic": "Clinic",
      "demo.view_practice": "Private practice"
    }
  };

  /* ============================================================
     CONTENT MANAGER OVERRIDES — text, contact details and photo alt
     text edited in /admin arrive as an inert JSON block (#siteContent).
     ============================================================ */
  var SITE_CONTENT = (function(){
    var el = document.getElementById('siteContent');
    if (!el) return {};
    try {
      var data = JSON.parse(el.textContent);
      return (data && typeof data === 'object') ? data : {};
    } catch (e) { return {}; }
  })();
  /* Only these keys may carry markup (built and escaped server-side). */
  var HTML_OVERRIDE_KEYS = { 'hero.title': true, 'maternity.title': true, 'form.fallback': true };
  if (SITE_CONTENT.i18n && typeof SITE_CONTENT.i18n === 'object'){
    ['es', 'en'].forEach(function(lang){
      var overrides = SITE_CONTENT.i18n[lang];
      if (!overrides || typeof overrides !== 'object') return;
      Object.keys(overrides).forEach(function(key){
        var val = overrides[key];
        if (typeof val !== 'string') return;
        if (val.indexOf('<') !== -1 && !HTML_OVERRIDE_KEYS[key]) return;
        I18N[lang][key] = val;
      });
    });
  }
  var SITE_IMAGES = (SITE_CONTENT.images && typeof SITE_CONTENT.images === 'object') ? SITE_CONTENT.images : {};

  // Nothing is stored until the visitor actually sets something (empty values remove the key).
  function store(key, val){ try { if (val === undefined) return localStorage.getItem(key); if (val === '{}' || val === '[]') localStorage.removeItem(key); else localStorage.setItem(key, val); } catch (e) { return null; } return null; }

  var LANG_KEY = 'clinica_lang';
  var currentLang = (function(){
    var saved = store(LANG_KEY);
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  })();
  var WHATSAPP_NUMBER = (typeof SITE_CONTENT.whatsapp === 'string' && /^\d{8,15}$/.test(SITE_CONTENT.whatsapp))
    ? SITE_CONTENT.whatsapp : (root.getAttribute('data-wa') || '50256302274');

  /** Name of the clinic or practice, as published (Perfil del sitio → Nombre). */
  function siteName(){ var el = document.querySelector('.brand-name'); return (el && el.textContent.trim()) || document.title.split(' · ')[0]; }
  function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }

  /* Shareable preview (static hosting, no PHP): the form answers itself so
     prospects can try it, and says plainly that nothing was sent. */
  var PREVIEW = document.documentElement.getAttribute('data-preview') === '1';
  function handlerFetch(url, opts){
    if (!PREVIEW) return fetch(url, opts);
    var reply = function(o){ return new Response(JSON.stringify(o), { status: 200, headers: { 'Content-Type': 'application/json' } }); };
    if (url.indexOf('challenge=1') !== -1){
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode('preview0')).then(function(h){
        var hex = Array.prototype.map.call(new Uint8Array(h), function(b){ return ('0' + b.toString(16)).slice(-2); }).join('');
        return reply({ algorithm: 'SHA-256', challenge: hex, salt: 'preview', maxnumber: 10, signature: 'preview' });
      });
    }
    return new Promise(function(r){ setTimeout(r, 600); }).then(function(){ return reply({ ok: true }); });
  }
  function okKey(k){ return PREVIEW ? 'demo.form_ok' : (k || 'form.status_ok'); }
  function fmt(s, vars){ return String(s).replace(/\{(\w+)\}/g, function(m, k){ return vars[k] !== undefined ? vars[k] : m; }); }
  function waUrl(text){ return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text); }

  var langToggle = document.getElementById('langToggle');
  var langListeners = [];

  function applyLang(lang){
    var dict = I18N[lang] || I18N.es;
    currentLang = lang;
    root.lang = (lang === 'es') ? 'es-GT' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n')];
      if (val === undefined) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = dict[parts[1].trim()];
        if (val !== undefined) el.setAttribute(parts[0].trim(), val);
      });
    });
    /* Service pages keep their own title (the home page's title is for the home page). */
    if (dict['meta.title'] && document.body.getAttribute('data-page') !== 'service') document.title = dict['meta.title'];
    [['metaDescription', 'meta.description'], ['ogTitle', 'meta.title'], ['ogDescription', 'meta.description'], ['twTitle', 'meta.title'], ['twDescription', 'meta.description'], ['ogLocale', 'og.locale']].forEach(function(p){
      var el = document.getElementById(p[0]);
      if (el && dict[p[1]]) el.setAttribute('content', dict[p[1]]);
    });
    if (langToggle){
      langToggle.querySelector('span').textContent = (lang === 'es') ? 'EN' : 'ES';
    }
    /* WhatsApp links: the general message, or one per service. */
    document.querySelectorAll('[data-wa]').forEach(function(a){
      var key = a.getAttribute('data-wa');
      var text = dict['whatsapp.message'];
      if (key){
        var name = dict[key] || '';
        text = (lang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + name.toLowerCase() + (lang === 'es' ? ' en ' : ' at ') + siteName() + '.';
      }
      a.setAttribute('href', waUrl(text));
    });
    store(LANG_KEY, lang);
    langListeners.forEach(function(fn){ fn(lang); });
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function(b){
    b.addEventListener('click', function(){
      var next = currentLang === 'es' ? 'en' : 'es';
      // A soft cross-fade between languages where the browser supports it.
      if (document.startViewTransition && !root.classList.contains('a11y-motion') && !mqReduce.matches) document.startViewTransition(function(){ applyLang(next); });
      else applyLang(next);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header: translucent material once content scrolls under it ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;
  function onScroll(){
    ticking = false;
    var sy = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', sy > 8);
    if (backToTop) backToTop.classList.toggle('show', sy > 900);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Sheets (native <dialog>): menu, accessibility, gallery ----------
     A <dialog> opened with showModal() already traps focus, makes the page
     behind it inert and closes with Escape. Each sheet enters and leaves
     along the same path (spatial consistency); closing waits for the exit
     transition, but a new open interrupts it immediately. */
  function sheet(dialog, opener){
    if (!dialog || typeof dialog.showModal !== 'function') return null;
    var closingTimer = null;
    var returnFocus = null;
    function open(from){
      returnFocus = from || opener || document.activeElement;
      clearTimeout(closingTimer);
      dialog.classList.remove('is-closing');
      if (!dialog.open) dialog.showModal();
      if (opener) opener.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function(){ dialog.classList.add('is-open'); });
      root.classList.add('has-sheet');
    }
    function close(){
      if (!dialog.open) return;
      dialog.classList.remove('is-open');
      dialog.classList.add('is-closing');
      if (opener) opener.setAttribute('aria-expanded', 'false');
      var done = function(){ dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); root.classList.remove('has-sheet'); if (returnFocus && returnFocus.focus) returnFocus.focus(); };
      if (reduceMotion) done(); else closingTimer = setTimeout(done, 260);
    }
    dialog.addEventListener('cancel', function(e){ e.preventDefault(); close(); });
    /* A tap on the dimmed backdrop (the <dialog> box itself) closes it. */
    dialog.addEventListener('click', function(e){ if (e.target === dialog) close(); });
    dialog.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', close); });
    if (opener) opener.addEventListener('click', function(){ dialog.open && !dialog.classList.contains('is-closing') ? close() : open(opener); });
    return { open: open, close: close, el: dialog };
  }

  var menu = sheet(document.getElementById('mobileNav'), document.getElementById('menuToggle'));
  if (menu){
    menu.el.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
    window.matchMedia('(min-width: 1200px)').addEventListener('change', function(e){ if (e.matches) menu.close(); });
  }

  /* ---------- Accessibility preferences ---------- */
  var A11Y_KEY = 'clinica_a11y';
  var a11y = (function(){ try { return JSON.parse(store(A11Y_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  var a11ySheet = sheet(document.getElementById('a11yPanel'), document.getElementById('a11yToggle'));
  function applyA11y(){
    root.setAttribute('data-text', a11y.size || '0');
    ['contrast', 'motion', 'links', 'spacing'].forEach(function(k){ root.classList.toggle('a11y-' + k, !!a11y[k]); });
    reduceMotion = mqReduce.matches || !!a11y.motion;
    root.classList.toggle('js-motion', !reduceMotion);
    document.querySelectorAll('[data-a11y]').forEach(function(sw){ sw.setAttribute('aria-checked', a11y[sw.getAttribute('data-a11y')] ? 'true' : 'false'); });
    document.querySelectorAll('[data-text-size]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-text-size') === String(a11y.size || '0'))); });
    store(A11Y_KEY, JSON.stringify(a11y));
  }
  document.querySelectorAll('[data-a11y]').forEach(function(sw){
    sw.addEventListener('click', function(){ var k = sw.getAttribute('data-a11y'); a11y[k] = !a11y[k]; applyA11y(); });
  });
  document.querySelectorAll('[data-text-size]').forEach(function(b){
    b.addEventListener('click', function(){ a11y.size = b.getAttribute('data-text-size'); applyA11y(); });
  });
  var a11yReset = document.getElementById('a11yReset');
  if (a11yReset) a11yReset.addEventListener('click', function(){ a11y = {}; applyA11y(); });
  applyA11y();
  mqReduce.addEventListener && mqReduce.addEventListener('change', applyA11y);

  /* ---------- Reveal on scroll (content is visible without JS) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Stats: count up once, from 0 to the published number ---------- */
  var statEls = document.querySelectorAll('[data-count]');
  function countUp(el){
    var text = el.textContent;
    var m = text.match(/^(\D*)(\d+)(.*)$/);
    if (!m || reduceMotion || m[2] === '24') return;
    var target = parseInt(m[2], 10), start = null, dur = 900;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && statEls.length){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); sio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    statEls.forEach(function(el){ sio.observe(el); });
  }

  /* ---------- Active section in the desktop navigation ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length){
    var byId = {};
    navLinks.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        navLinks.forEach(function(a){ a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  /* ---------- Visiting hours: live status in Guatemala time (UTC−6, no DST) ---------- */
  var visitEls = Array.prototype.slice.call(document.querySelectorAll('#visitStatus, [data-visit-status]'));
  function visitStatus(){
    visitEls.forEach(function(visitEl){
      var windows = (visitEl.getAttribute('data-windows') || '').split(',').map(function(w){
        var m = w.trim().match(/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
        return m ? [(+m[1]) * 60 + (+m[2]), (+m[3]) * 60 + (+m[4]), m[1] + ':' + m[2], m[3] + ':' + m[4]] : null;
      }).filter(Boolean);
      if (!windows.length){ visitEl.hidden = true; return; }
      var now = new Date(Date.now() - 6 * 3600 * 1000);
      var mins = now.getUTCHours() * 60 + now.getUTCMinutes();
      var open = null, next = null;
      windows.forEach(function(w){
        if (mins >= w[0] && mins < w[1]) open = w;
        if (mins < w[0] && (!next || w[0] < next[0])) next = w;
      });
      if (!open && !next) next = windows.slice().sort(function(a, b){ return a[0] - b[0]; })[0];
      visitEl.setAttribute('data-state', open ? 'open' : 'closed');
      var label = visitEl.querySelector('[data-role="label"]');
      var detail = visitEl.querySelector('[data-role="detail"]');
      var detailText = open ? fmt(t('visits.until'), { time: open[3] }) : fmt(t('visits.next'), { time: next[2] });
      if (detail){ label.textContent = t(open ? 'visits.open' : 'visits.closed'); detail.textContent = detailText; }
      else if (label) label.textContent = open ? t('visits.open') : detailText;
    });
  }
  visitStatus();
  setInterval(visitStatus, 60000);
  langListeners.push(visitStatus);

  /* ---------- Patients: tabs (WAI-ARIA pattern) with a sliding indicator ---------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist){
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var indicator = tablist.querySelector('.tab-indicator');
    var moveIndicator = function(tab){
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    };
    var select = function(tab, focus){
      tabs.forEach(function(tb){
        var on = tb === tab;
        tb.setAttribute('aria-selected', String(on));
        tb.tabIndex = on ? 0 : -1;
        document.getElementById(tb.getAttribute('aria-controls')).hidden = !on;
      });
      moveIndicator(tab);
      if (focus) tab.focus();
    };
    tabs.forEach(function(tab, i){
      /* Feedback on press, not on release. */
      tab.addEventListener('pointerdown', function(){ select(tab, false); });
      tab.addEventListener('click', function(){ select(tab, false); });
      tab.addEventListener('keydown', function(e){
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n){ e.preventDefault(); select(n, true); }
      });
    });
    var current = function(){ return tabs.filter(function(tb){ return tb.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]; };
    window.addEventListener('resize', function(){ moveIndicator(current()); });
    langListeners.push(function(){ requestAnimationFrame(function(){ moveIndicator(current()); }); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ moveIndicator(current()); });
    moveIndicator(current());
  }

  /* ---------- Hospital bag checklist, saved only on this device ---------- */
  var BAG_KEY = 'clinica_bag';
  var bag = document.getElementById('bagList');
  if (bag){
    var saved = (function(){ try { return JSON.parse(store(BAG_KEY) || '[]') || []; } catch (e) { return []; } })();
    var boxes = Array.prototype.slice.call(bag.querySelectorAll('input[type="checkbox"]'));
    var progress = document.getElementById('bagProgress');
    var ring = document.getElementById('bagRing');
    var update = function(){
      var done = boxes.filter(function(b){ return b.checked; });
      if (progress) progress.textContent = fmt(t('bag.progress'), { n: done.length, total: boxes.length });
      if (ring){ ring.style.setProperty('--p', boxes.length ? done.length / boxes.length : 0); ring.toggleAttribute('data-empty', done.length === 0); }
      store(BAG_KEY, JSON.stringify(done.map(function(b){ return b.value; })));
    };
    boxes.forEach(function(b){ b.checked = saved.indexOf(b.value) !== -1; b.addEventListener('change', update); });
    update();
    langListeners.push(update);
  }

  /* ---------- "Get a quote" buttons pick the matching form option ---------- */
  document.querySelectorAll('[data-preselect]').forEach(function(a){
    a.addEventListener('click', function(){
      var sel = document.getElementById('service');
      var val = a.getAttribute('data-preselect');
      if (sel && sel.querySelector('option[value="' + val + '"]')) sel.value = val;
    });
  });

  /* ---------- Facilities gallery: native scroll-snap carousel in a sheet ----------
     Native scrolling gives 1:1 tracking, momentum projection and rubber-band
     edges for free; the buttons and dots only ask it to scroll. */
  var gallery = sheet(document.getElementById('galleryModal'));
  if (gallery){
    var slidesEl = document.getElementById('gallerySlides');
    var dotsEl = document.getElementById('galleryDots');
    var titleEl = document.getElementById('galleryTitle');
    var tagEl = document.getElementById('galleryTag');
    var descEl = document.getElementById('galleryDesc');
    var noteEl = document.getElementById('galleryNote');
    var liveEl = document.getElementById('galleryLive');
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    var index = 0, count = 0;
    var go = function(i){
      i = Math.max(0, Math.min(count - 1, i));
      var w = slidesEl.clientWidth;
      slidesEl.scrollTo({ left: i * w, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var sync = function(){
      var i = Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth));
      if (i === index && dotsEl.childNodes.length) return;
      index = i;
      Array.prototype.forEach.call(dotsEl.children, function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i <= 0;
      next.disabled = i >= count - 1;
      liveEl.textContent = count > 1 ? fmt(t('projects.modal_image_of'), { n: i + 1, total: count }) : '';
    };
    slidesEl.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', function(){ go(index - 1); });
    next.addEventListener('click', function(){ go(index + 1); });
    slidesEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(index + 1); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(index - 1); }
    });
    document.querySelectorAll('.area-card[data-project]').forEach(function(card){
      var btn = card.querySelector('.area-open');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var pid = card.getAttribute('data-project');
        var title = t(pid + '.title');
        var paths = (card.getAttribute('data-images') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        tagEl.textContent = t(pid + '.tag');
        titleEl.textContent = title;
        descEl.textContent = t(pid + '.desc');
        slidesEl.innerHTML = '';
        dotsEl.innerHTML = '';
        if (!paths.length){
          var ph = document.createElement('div');
          var art = card.querySelector('.area-art');
          ph.className = 'gallery-slide is-placeholder ' + (art ? art.className : '');
          ph.innerHTML = art ? art.innerHTML : '';
          slidesEl.appendChild(ph);
        }
        paths.forEach(function(p, k){
          var meta = SITE_IMAGES[p] || {};
          var alt = (meta.alt && (meta.alt[currentLang] || meta.alt.es)) || fmt(t('projects.modal_photo_alt'), { n: k + 1, title: title });
          var slide = document.createElement('div');
          slide.className = 'gallery-slide';
          var img = document.createElement('img');
          img.src = p;
          if (meta.srcset){ img.srcset = meta.srcset; img.sizes = '(max-width: 760px) 100vw, 760px'; }
          img.alt = alt;
          img.decoding = 'async';
          if (k > 0) img.loading = 'lazy';
          slide.appendChild(img);
          slidesEl.appendChild(slide);
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', fmt(t('projects.modal_goto_slide'), { n: k + 1 }));
          dot.addEventListener('click', function(){ go(k); });
          dotsEl.appendChild(dot);
        });
        count = Math.max(1, paths.length);
        noteEl.hidden = paths.length > 0;
        dotsEl.hidden = prev.hidden = next.hidden = paths.length < 2;
        index = -1;
        gallery.open(btn);
        slidesEl.scrollLeft = 0;
        sync();
      });
    });
  }

  /* ---------- Service details: a sheet anchored to the card that opened it ---------- */
  var serviceSheet = sheet(document.getElementById('serviceModal'));
  if (serviceSheet){
    var sHero = document.getElementById('serviceHero');
    var sIcon = document.getElementById('serviceIcon');
    var sTitle = document.getElementById('serviceTitle');
    var sText = document.getElementById('serviceText');
    var sWa = document.getElementById('serviceWa');
    var openService = function(card, btn){
      var key = card.getAttribute('data-service');
      var photo = card.querySelector('.service-photo');
      var icon = card.querySelector('.service-icon');
      sHero.innerHTML = '';
      if (photo){
        var img = photo.cloneNode(false);
        img.removeAttribute('loading');
        img.className = '';
        img.sizes = '(max-width: 760px) 100vw, 640px';
        sHero.appendChild(img);
      }
      sIcon.innerHTML = icon ? icon.innerHTML : '';
      sIcon.className = 'service-icon' + (key === 'service1' ? ' is-emergency' : '');
      sTitle.textContent = t(key + '.title');
      sText.innerHTML = '';
      [t(key + '.desc')].concat(String(t(key + '.more') || '').split(/\n\s*\n/)).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        sText.appendChild(p);
      });
      sWa.setAttribute('data-wa', key + '.title');
      sWa.setAttribute('href', waUrl((currentLang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + t(key + '.title').toLowerCase() + (currentLang === 'es' ? ' en ' : ' at ') + siteName() + '.'));
      serviceSheet.open(btn);
      sText.scrollTop = 0;
    };
    var labelServices = function(){
      document.querySelectorAll('.service-card[data-service]').forEach(function(card){
        var btn = card.querySelector('.service-open');
        if (btn) btn.setAttribute('aria-label', fmt(t('services.more_aria'), { name: t(card.getAttribute('data-service') + '.title') }));
      });
    };
    document.querySelectorAll('.service-card[data-service]').forEach(function(card){
      var btn = card.querySelector('.service-open');
      if (btn) btn.addEventListener('click', function(){ openService(card, btn); });
    });
    langListeners.push(labelServices);
  }

  /* ---------- Map: loaded only when the visitor asks (no Google request before) ---------- */
  var mapBox = document.getElementById('mapBox');
  var mapLoad = document.getElementById('mapLoad');
  if (mapBox && mapLoad){
    mapLoad.addEventListener('click', function(){
      if (mapBox.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = mapBox.getAttribute('data-src');
      f.title = t('contact.map_frame');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function(){ mapBox.classList.add('is-loaded'); f.focus(); });
      mapBox.appendChild(f);
    });
  }

  /* ---------- Save contact: a correct vCard built on the device ---------- */
  var vcardBtn = document.getElementById('vcardBtn');
  if (vcardBtn){
    vcardBtn.addEventListener('click', function(){
      var d = {};
      try { d = JSON.parse(vcardBtn.getAttribute('data-vcard') || '{}'); } catch (e) { return; }
      var esc = function(v){ return String(v || '').replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n'); };
      var lines = ['BEGIN:VCARD', 'VERSION:3.0', 'KIND:org', 'FN:' + esc(d.name), 'ORG:' + esc(d.name)];
      (d.tel || []).forEach(function(n, i){ lines.push('TEL;TYPE=' + (i === 0 ? 'WORK,VOICE' : 'CELL,VOICE') + ':' + n); });
      if (d.email) lines.push('EMAIL;TYPE=WORK:' + d.email);
      lines.push('ADR;TYPE=WORK:;;' + esc(d.street) + ';' + esc(d.city) + ';;;Guatemala');
      if (d.url) lines.push('URL:' + d.url);
      lines.push('END:VCARD');
      var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = siteName().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.vcf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }

  /* ---------- Photos fade in once loaded (no pop-in on slow connections) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.service-photo, .area-photo, .about-photo, .maternity-img, .hero-photo img'), function(img){
    if (img.complete && img.naturalWidth) return;
    img.classList.add('is-loading');
    function done(){ img.classList.remove('is-loading'); }
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---------- Gentle parallax on the large photos (transform only, rAF-batched) ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var mqWide = window.matchMedia('(min-width: 900px)');
  var plxTicking = false;
  function parallax(){
    plxTicking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function(el){
      if (reduceMotion || !mqWide.matches){ el.style.transform = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var offset = (r.top + r.height / 2 - vh / 2) * -0.06;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  if (parallaxEls.length){
    window.addEventListener('scroll', function(){ if (!plxTicking){ plxTicking = true; requestAnimationFrame(parallax); } }, { passive: true });
    window.addEventListener('resize', parallax);
    parallax();
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.getElementById('inicio');
      if (skip) skip.focus({ preventScroll: true });
    });
  }

  applyLang(currentLang);
  onScroll();

  /* ============================================================
     Contact form — client-side validation (a UX convenience only;
     assets/contact-handler.php re-validates everything server-side),
     honeypot + minimum-completion-time anti-spam signals, and a
     defensive fetch() that handles non-JSON responses, HTTP status
     categories, timeouts, duplicate submits, offline errors, and
     field-specific errors returned by the server. Field values are
     preserved on any failure and cleared only after a confirmed
     success.
     ============================================================ */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var summary = document.getElementById('formSummary');

  /* Minimum-completion-time signal: stamped once, invisible, never an
     expectation placed on the visitor — purely a server-side anti-spam
     input alongside the honeypot. */
  var loadedAtField = document.getElementById('formLoadedAt');
  if (loadedAtField) loadedAtField.value = String(Date.now());

  /* ------------------------------------------------------------
     Captcha, two layers (verified again in assets/contact-handler.php):
     1. Built-in, always on: the handler issues a signed, single-use
        challenge and the browser finds the matching number with the
        Web Crypto API (SHA-256) in the background while the visitor
        types. Invisible: the visitor never has to do anything.
     2. Optional Cloudflare Turnstile, only when the page carries a
        site key (the owner enables it in the Content Manager). It
        stays hidden unless Cloudflare needs the visitor to click.
     ------------------------------------------------------------ */
  var captchaInput = document.getElementById('formCaptchaAnswer');
  var captchaText = document.getElementById('formCaptchaText');
  var captchaNote = document.getElementById('formCaptcha');
  var captchaJob = null;      /* Promise of the current answer */
  var captchaIssued = 0;      /* when the current challenge was requested */
  var CAPTCHA_FRESH_MS = 25 * 60 * 1000; /* the server accepts 30 min */

  function setCaptchaState(state){
    if (captchaNote) captchaNote.setAttribute('data-state', state);
    if (captchaText){
      captchaText.setAttribute('data-i18n', 'form.captcha_' + state);
      captchaText.textContent = t('form.captcha_' + state);
    }
  }

  function hexToBytes(hex){
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameBytes(buf, target){
    var a = new Uint8Array(buf);
    for (var i = 0; i < target.length; i++) if (a[i] !== target[i]) return false;
    return true;
  }

  function solveCaptcha(){
    if (!captchaInput) return Promise.resolve();
    if (!window.crypto || !window.crypto.subtle || typeof TextEncoder === 'undefined' || typeof fetch === 'undefined'){
      setCaptchaState('error');
      return Promise.reject(new Error('captcha_unsupported'));
    }
    captchaInput.value = '';
    captchaIssued = Date.now();
    setCaptchaState('pending');
    return handlerFetch('assets/contact-handler.php?challenge=1', { headers: { 'Accept': 'application/json' }, cache: 'no-store', credentials: 'same-origin' })
      .then(function(res){
        if (!res.ok) throw new Error('captcha_challenge_' + res.status);
        return res.json();
      })
      .then(function(c){
        if (!c || c.algorithm !== 'SHA-256' || typeof c.salt !== 'string' || typeof c.challenge !== 'string') throw new Error('captcha_bad_challenge');
        var enc = new TextEncoder();
        var target = hexToBytes(c.challenge);
        var BATCH = 1000;
        var search = function(start){
          if (start > c.maxnumber) throw new Error('captcha_unsolved');
          var end = Math.min(start + BATCH, c.maxnumber + 1);
          var jobs = [];
          for (var n = start; n < end; n++) jobs.push(window.crypto.subtle.digest('SHA-256', enc.encode(c.salt + n)));
          return Promise.all(jobs).then(function(hashes){
            for (var i = 0; i < hashes.length; i++) if (sameBytes(hashes[i], target)) return start + i;
            return search(end);
          });
        };
        return search(0).then(function(number){
          captchaInput.value = btoa(JSON.stringify({ algorithm: c.algorithm, challenge: c.challenge, number: number, salt: c.salt, signature: c.signature }));
          setCaptchaState('ok');
        });
      })
      .catch(function(err){
        setCaptchaState('error');
        captchaJob = null;
        throw err;
      });
  }

  /* The current answer, or a new one when there is none or it is getting old. */
  function ensureCaptcha(){
    if (!captchaJob || Date.now() - captchaIssued > CAPTCHA_FRESH_MS) captchaJob = solveCaptcha();
    return captchaJob;
  }

  function startCaptcha(){
    ensureCaptcha().catch(function(){ /* shown in the note; retried on submit */ });
    loadTurnstile();
  }

  /* Optional Cloudflare Turnstile. */
  var tsBox = document.getElementById('formTurnstile');
  var tsSiteKey = tsBox ? (tsBox.getAttribute('data-sitekey') || '') : '';
  var tsWidget = null;
  var tsToken = '';
  var tsWaiters = [];
  var tsLoading = false;

  function tsSettle(){
    var w = tsWaiters; tsWaiters = [];
    w.forEach(function(fn){ fn(); });
  }

  function loadTurnstile(){
    if (!tsSiteKey || tsLoading) return;
    tsLoading = true;
    window.clinicaTurnstileReady = function(){
      if (!window.turnstile) return;
      tsWidget = window.turnstile.render(tsBox, {
        sitekey: tsSiteKey,
        action: 'contact',
        appearance: 'interaction-only',
        language: currentLang === 'en' ? 'en' : 'es',
        callback: function(token){ tsToken = token; tsSettle(); },
        'expired-callback': function(){ tsToken = ''; },
        'error-callback': function(){ tsToken = ''; tsSettle(); }
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=clinicaTurnstileReady';
    sc.async = true;
    sc.defer = true;
    document.head.appendChild(sc);
  }

  /* Resolves with true when Turnstile is off or has a token; false after waiting. */
  function turnstileReady(){
    if (!tsSiteKey) return Promise.resolve(true);
    loadTurnstile();
    if (tsToken) return Promise.resolve(true);
    return new Promise(function(resolve){
      var timer = setTimeout(function(){ resolve(!!tsToken); }, 20000);
      tsWaiters.push(function(){ clearTimeout(timer); resolve(!!tsToken); });
    });
  }

  function resetTurnstile(){
    tsToken = '';
    if (tsWidget !== null && window.turnstile) {
      try { window.turnstile.reset(tsWidget); } catch (e) { /* widget gone */ }
    }
  }

  /* Start as soon as the visitor shows interest in the form (or it scrolls into view). */
  var contactFormEl = document.getElementById('contactForm');
  if (contactFormEl && captchaInput){
    var started = false;
    var kick = function(){ if (!started){ started = true; startCaptcha(); } };
    contactFormEl.addEventListener('focusin', kick);
    contactFormEl.addEventListener('pointerdown', kick);
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        if (entries.some(function(e){ return e.isIntersecting; })){ io.disconnect(); kick(); }
      }, { rootMargin: '300px' });
      io.observe(contactFormEl);
    }
  }

  if (form){
    /* The questions come from the Content Manager (Sitio web → Formulario de
       contacto): each .field holds one question — an input, select or
       textarea, or a group of radio buttons / checkboxes. */
    var questionFields = function(){
      return Array.prototype.filter.call(form.querySelectorAll('.field'), function(f){
        return !f.classList.contains('hp-field') && f.querySelector('input[name],select[name],textarea[name]');
      });
    };
    var fieldName = function(field){
      return field.querySelector('input[name],select[name],textarea[name]').name.replace(/\[\]$/, '');
    };
    var controlsOf = function(field){ return field.querySelectorAll('input[name],select[name],textarea[name]'); };
    var fieldValid = function(field){
      var controls = controlsOf(field);
      if (controls[0].type === 'checkbox'){
        if (!field.hasAttribute('data-required')) return true;
        return Array.prototype.some.call(controls, function(c){ return c.checked; });
      }
      return controls[0].checkValidity(); /* a radio's validity covers its whole group */
    };
    var markField = function(field, ok){
      field.classList.toggle('invalid', !ok);
      Array.prototype.forEach.call(controlsOf(field), function(c){ c.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    };
    var fieldByName = function(name){
      var found = null;
      questionFields().forEach(function(f){ if (!found && fieldName(f) === name) found = f; });
      return found;
    };
    /* Dates that must be from today on (the page is static: today is set here). */
    var today = new Date();
    var todayIso = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    Array.prototype.forEach.call(form.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayIso; });

    var submitBtn = form.querySelector('button[type="submit"]');
    var submitting = false;

    var validateAll = function(){
      var valid = true;
      var firstInvalid = null;
      questionFields().forEach(function(field){
        var ok = fieldValid(field);
        markField(field, ok);
        if (!ok){
          valid = false;
          if (!firstInvalid) firstInvalid = controlsOf(field)[0];
        }
      });
      return { valid: valid, firstInvalid: firstInvalid };
    }

    var showSummary = function(message){
      if (!summary) return;
      summary.textContent = message;
      summary.hidden = false;
    }
    var hideSummary = function(){
      if (!summary) return;
      summary.hidden = true;
      summary.textContent = '';
    }

    var setStatus = function(message, kind){
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show' + (kind ? ' ' + kind : '');
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (submitting) return; /* duplicate-submission guard */

      hideSummary();

      var result = validateAll();

      /* Honeypot check — if this hidden field has a value, silently drop
         as bot spam without hitting the network or alarming the (bot)
         "user" that anything was detected. */
      var hp = document.getElementById('website');
      if (hp && hp.value){
        setStatus(t('form.status_ok'), 'ok');
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      if (!result.valid){
        showSummary(t('form.status_invalid'));
        setStatus(t('form.status_invalid'), 'error');
        if (result.firstInvalid) result.firstInvalid.focus();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.onLine === false){
        setStatus(t('form.status_offline'), 'error');
        return;
      }

      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      var done = function(){
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
      };
      if (captchaInput && !captchaInput.value) setStatus(t('form.status_verifying'), '');

      ensureCaptcha()
        .then(function(){ return turnstileReady(); })
        .then(function(ok){
          if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
          send(false);
        }, function(){
          setStatus(t('form.status_captcha'), 'error');
          done();
        });

      function send(retried){
      setStatus(t('form.status_sending'), '');
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function(){ controller.abort(); }, 15000) : null;

      var formData = new FormData(form);
      formData.append('lang', currentLang === 'en' ? 'en' : 'es'); /* reply in the visitor's language */
      handlerFetch('assets/contact-handler.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
        .then(function(res){
          if (timeoutId) clearTimeout(timeoutId);
          var contentType = res.headers.get('Content-Type') || '';
          var parse = contentType.indexOf('application/json') !== -1
            ? res.json().catch(function(){ return null; })
            : Promise.resolve(null);
          return parse.then(function(data){ return { res: res, data: data }; });
        })
        .then(function(result){
          var res = result.res, data = result.data;

          if (res.ok && data && data.ok){
            setStatus(t(okKey()), 'ok');
            hideSummary();
            form.reset();
            questionFields().forEach(function(f){ markField(f, true); });
            if (loadedAtField) loadedAtField.value = String(Date.now());
            /* Each captcha answer works once: prepare the next one. */
            captchaJob = null;
            resetTurnstile();
            ensureCaptcha().catch(function(){});
            return;
          }

          if (res.status === 400 && data && data.error === 'captcha_failed'){
            /* Expired or already used answer (e.g. the page was open for
               hours): solve a fresh one and try once more on our own. */
            captchaJob = null;
            resetTurnstile();
            if (!retried){
              ensureCaptcha()
                .then(function(){ return turnstileReady(); })
                .then(function(ok){
                  if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
                  send(true);
                }, function(){ setStatus(t('form.status_captcha'), 'error'); done(); });
              return 'pending';
            }
            setStatus(t('form.status_captcha'), 'error');
            return;
          }

          if (res.status === 429){
            setStatus(t('form.status_rate_limited'), 'error');
            return;
          }

          if (res.status === 422 && data && Array.isArray(data.fields) && data.fields.length){
            var firstBad = null;
            data.fields.forEach(function(name){
              var bad = fieldByName(String(name));
              if (!bad) return;
              markField(bad, false);
              if (!firstBad) firstBad = controlsOf(bad)[0];
            });
            showSummary(t('form.status_invalid'));
            setStatus(t('form.status_invalid'), 'error');
            if (firstBad) firstBad.focus();
            return;
          }

          if (res.status >= 500){
            setStatus(t('form.status_error'), 'error');
            return;
          }

          /* Any other non-success status (403 origin check, unexpected
             field rejected, malformed/non-JSON response, etc.) — generic,
             non-revealing error message. Values are preserved either way. */
          setStatus(t('form.status_error'), 'error');
        })
        .catch(function(err){
          if (timeoutId) clearTimeout(timeoutId);
          if (err && err.name === 'AbortError'){
            setStatus(t('form.status_timeout'), 'error');
          } else if (typeof navigator !== 'undefined' && navigator.onLine === false){
            setStatus(t('form.status_offline'), 'error');
          } else {
            setStatus(t('form.status_error'), 'error');
          }
        })
        .then(function(outcome){
          if (outcome !== 'pending') done();
        });
      }
    });

    questionFields().forEach(function(field){
      Array.prototype.forEach.call(controlsOf(field), function(input){
        var check = function(){ markField(field, fieldValid(field)); };
        input.addEventListener('blur', check);
        /* choices: re-check as soon as one is picked */
        if (input.type === 'radio' || input.type === 'checkbox') input.addEventListener('change', check);
      });
    });
  }
  /* ============================================================
     HOSPITAL MODULES (cms/src/HospitalModules.php) — every block is
     optional: each part below does nothing when its markup is absent.
     ============================================================ */
  var todayYmd = (function(){ var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); })();
  var fold = function(s){
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  };

  /* ---------- Featured notice: hidden after its end date; closing hides it for this visit ---------- */
  var notice = document.getElementById('siteNotice');
  if (notice){
    var until = notice.getAttribute('data-until') || '';
    var noticeKey = 'clinica_notice_closed';
    var noticeSig = String((I18N.es['notice.text'] || notice.textContent || '').length) + ':' + until;
    var closed = false;
    try { closed = sessionStorage.getItem(noticeKey) === noticeSig; } catch (e) { /* storage blocked */ }
    if ((until && until < todayYmd) || closed) notice.hidden = true;
    var noticeClose = document.getElementById('noticeClose');
    if (noticeClose) noticeClose.addEventListener('click', function(){
      notice.hidden = true;
      try { sessionStorage.setItem(noticeKey, noticeSig); } catch (e) { /* storage blocked */ }
      var main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });
  }

  /* ---------- Texts made of several pieces (package lists, service page paragraphs) ---------- */
  var applyPieces = function(){
    document.querySelectorAll('[data-split-i18n]').forEach(function(ul){
      var val = t(ul.getAttribute('data-split-i18n'));
      if (!val || val === ul.getAttribute('data-split-i18n')) return;
      var items = val.split(/[;\n]+/).map(function(s){ return s.trim(); }).filter(Boolean);
      ul.innerHTML = '';
      items.forEach(function(text){
        var li = document.createElement('li');
        li.innerHTML = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
        var span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        ul.appendChild(li);
      });
    });
    document.querySelectorAll('[data-i18n-paras]').forEach(function(box){
      var val = t(box.getAttribute('data-i18n-paras'));
      if (!val || val === box.getAttribute('data-i18n-paras')) return;
      box.innerHTML = '';
      val.split(/\n\s*\n/).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        box.appendChild(p);
      });
    });
    document.querySelectorAll('[data-stars]').forEach(function(s){ s.setAttribute('aria-label', fmt(t('reviews.stars_aria'), { n: s.getAttribute('data-stars') })); });
    document.querySelectorAll('[data-reviews-count]').forEach(function(s){ s.textContent = fmt(t('reviews.count_text'), { n: s.getAttribute('data-reviews-count') }); });
    /* «Pedir cita» by WhatsApp: a message naming the doctor and the specialty. */
    document.querySelectorAll('[data-wa-doc]').forEach(function(a){
      var k = a.getAttribute('data-wa-doc');
      a.setAttribute('href', waUrl(fmt(t('doctors.wa_msg'), { name: a.getAttribute('data-doc-name') || '', specialty: t(k + '.specialty') === k + '.specialty' ? '' : t(k + '.specialty') })));
    });
  };
  langListeners.push(applyPieces);
  if (currentLang !== 'es') applyPieces();

  /* ---------- Doctors: search by name or specialty, filter by specialty ---------- */
  var docGrid = document.getElementById('doctorsGrid');
  if (docGrid){
    var docSearch = document.getElementById('docSearch');
    var docFilter = document.getElementById('docFilter');
    var docEmpty = document.getElementById('docEmpty');
    var docCount = document.getElementById('docCount');
    var activeSpec = '';
    var docTimer = null;
    var filterDoctors = function(announce){
      var q = fold(docSearch ? docSearch.value : '');
      var shown = 0;
      Array.prototype.forEach.call(docGrid.children, function(card){
        var okSpec = !activeSpec || card.getAttribute('data-spec') === activeSpec;
        var okText = !q || q.split(' ').every(function(w){ return (card.getAttribute('data-search') || '').indexOf(w) !== -1; });
        card.hidden = !(okSpec && okText);
        if (!card.hidden){ shown++; card.classList.add('in'); }
      });
      if (docEmpty) docEmpty.hidden = shown !== 0;
      if (docCount && announce) docCount.textContent = shown === 1 ? t('doctors.result1') : fmt(t('doctors.results'), { n: shown });
    };
    if (docSearch) docSearch.addEventListener('input', function(){
      clearTimeout(docTimer);
      docTimer = setTimeout(function(){ filterDoctors(true); }, 180);
    });
    if (docFilter) docFilter.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.chip-btn') : null;
      if (!b) return;
      activeSpec = b.getAttribute('data-filter') || '';
      Array.prototype.forEach.call(docFilter.querySelectorAll('.chip-btn'), function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      filterDoctors(true);
    });
  }

  /* ---------- Appointment: preselect specialty / doctor (cards, service pages, ?medico= / ?especialidad=) ---------- */
  var apptForm = document.getElementById('appointmentForm');
  var apptSpec = document.getElementById('apptSpecialty');
  var apptDoc = document.getElementById('apptDoctor');
  var preselectAppointment = function(doctor, spec){
    if (!apptForm) return false;
    if (apptDoc && doctor && apptDoc.querySelector('option[value="' + doctor + '"]')){
      apptDoc.value = doctor;
      spec = spec || apptDoc.options[apptDoc.selectedIndex].getAttribute('data-spec');
    }
    if (apptSpec && spec && apptSpec.querySelector('option[value="' + spec + '"]')) apptSpec.value = spec;
    return true;
  };
  if (apptForm){
    document.querySelectorAll('[data-appt-doctor],[data-appt-spec]').forEach(function(a){
      a.addEventListener('click', function(e){
        if (!preselectAppointment(a.getAttribute('data-appt-doctor'), a.getAttribute('data-appt-spec'))) return;
        e.preventDefault();
        var target = document.getElementById('citas');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(function(){ var f = document.getElementById('apptDate'); if (f) f.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
      });
    });
    /* Picking a doctor also picks the specialty. */
    if (apptDoc) apptDoc.addEventListener('change', function(){
      var o = apptDoc.options[apptDoc.selectedIndex];
      var s = o ? o.getAttribute('data-spec') : '';
      if (s && apptSpec && apptSpec.querySelector('option[value="' + s + '"]')) apptSpec.value = s;
    });
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('medico') || params.get('especialidad')) preselectAppointment(params.get('medico'), params.get('especialidad'));
    } catch (e) { /* old browser */ }
  }

  /* ---------- Request forms (appointment, insurance check) ----------
     Same handler, anti-spam and captcha as the contact form; stored in
     «Prospectos» with their kind. */
  Array.prototype.forEach.call(document.querySelectorAll('form.lead-form'), function(lf){
    var stamp = lf.querySelector('[data-loaded-at]');
    if (stamp) stamp.value = String(Date.now());
    var statusEl = lf.querySelector('[data-form-status]');
    var btn = lf.querySelector('button[type="submit"]');
    var busy = false;
    var kicked = false;
    var kickOff = function(){ if (!kicked){ kicked = true; startCaptcha(); } };
    lf.addEventListener('focusin', kickOff);
    lf.addEventListener('pointerdown', kickOff);
    Array.prototype.forEach.call(lf.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayYmd; });
    var fields = function(){ return Array.prototype.filter.call(lf.querySelectorAll('.field'), function(f){ return f.querySelector('input[name],select[name],textarea[name]'); }); };
    var ctl = function(f){ return f.querySelector('input[name],select[name],textarea[name]'); };
    var valid = function(f){ return ctl(f).checkValidity(); };
    var mark = function(f, ok){ f.classList.toggle('invalid', !ok); ctl(f).setAttribute('aria-invalid', ok ? 'false' : 'true'); };
    var say = function(msg, kind){ if (!statusEl) return; statusEl.textContent = msg; statusEl.className = 'form-status show' + (kind ? ' ' + kind : ''); };
    fields().forEach(function(f){ ctl(f).addEventListener('blur', function(){ mark(f, valid(f)); }); ctl(f).addEventListener('change', function(){ if (f.classList.contains('invalid')) mark(f, valid(f)); }); });
    var finish = function(){ busy = false; if (btn) btn.disabled = false; };
    var post = function(retried){
      say(t('form.status_sending'), '');
      var fd = new FormData(lf);
      fd.set('captcha', captchaInput ? captchaInput.value : '');
      if (tsToken) fd.set('cf-turnstile-response', tsToken);
      fd.append('lang', currentLang === 'en' ? 'en' : 'es');
      handlerFetch('assets/contact-handler.php', { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
        .then(function(res){ return res.json().catch(function(){ return null; }).then(function(data){ return { res: res, data: data }; }); })
        .then(function(r){
          if (r.res.ok && r.data && r.data.ok){
            say(t(okKey(lf.getAttribute('data-ok'))), 'ok');
            lf.reset();
            fields().forEach(function(f){ mark(f, true); });
            if (stamp) stamp.value = String(Date.now());
            captchaJob = null; resetTurnstile(); ensureCaptcha().catch(function(){});
            finish();
            return;
          }
          if (r.res.status === 400 && r.data && r.data.error === 'captcha_failed' && !retried){
            captchaJob = null; resetTurnstile();
            ensureCaptcha().then(turnstileReady).then(function(ok){ if (ok) post(true); else { say(t('form.status_turnstile'), 'error'); finish(); } }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
            return;
          }
          if (r.res.status === 422 && r.data && Array.isArray(r.data.fields)){
            var first = null;
            r.data.fields.forEach(function(name){
              var c = lf.querySelector('[name="' + String(name).replace(/[^a-z_]/g, '') + '"]');
              var f = c && c.closest('.field');
              if (f){ mark(f, false); if (!first) first = c; }
            });
            say(t('form.status_invalid'), 'error');
            if (first) first.focus();
          } else if (r.res.status === 429){
            say(t('form.status_rate_limited'), 'error');
          } else {
            say(t('form.status_error'), 'error');
          }
          finish();
        })
        .catch(function(){ say(t(navigator.onLine === false ? 'form.status_offline' : 'form.status_error'), 'error'); finish(); });
    };
    lf.addEventListener('submit', function(e){
      e.preventDefault();
      if (busy) return;
      var hp = lf.querySelector('input[name="website"]');
      if (hp && hp.value){ say(t(lf.getAttribute('data-ok') || 'form.status_ok'), 'ok'); lf.reset(); return; }
      var first = null;
      fields().forEach(function(f){ var ok = valid(f); mark(f, ok); if (!ok && !first) first = ctl(f); });
      if (first){ say(t('form.status_invalid'), 'error'); first.focus(); return; }
      busy = true;
      if (btn) btn.disabled = true;
      kickOff();
      if (captchaInput && !captchaInput.value) say(t('form.status_verifying'), '');
      ensureCaptcha().then(turnstileReady).then(function(ok){
        if (!ok){ say(t('form.status_turnstile'), 'error'); finish(); return; }
        post(false);
      }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
    });
  });
})();
