<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Personajes Únicos</h2>
            
            <div class="content-box">
                <h3>Ramza Beoulve (Protagonista)</h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Squire (Especial)</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Mettle (Ch.1-3) / Ultima (Ch.4)</span></div>
                <div class="stat-line"><span class="stat-label">Clases Accesibles:</span> <span class="stat-value">Todas las genéricas</span></div>
                <p style="margin-top: 10px;"><strong>Consejos:</strong> Ramza puede aprender TODAS las clases genéricas. Su Squire especial tiene Yell (+1 Speed permanente), Accumulate (+1 PA), y en Chapter 4 obtiene Ultima. Recomendado: Ninja con Two Swords o Monk con Martial Arts.</p>
                <p style="margin-top: 10px;"><strong>⚠️ Zodiac importante:</strong> Elige Aries, Gemini, Leo o Pisces para mejor compatibilidad en batallas difíciles del late game.</p>
            </div>

            <div class="content-box">
                <h3>Agrias Oaks</h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Holy Knight</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Holy Sword (Lightning Stab, Hallowed Bolt, Judgment Blade, etc.)</span></div>
                <div class="stat-line"><span class="stat-label">Arma Única:</span> <span class="stat-value">Save the Queen (espada especial)</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Automático en Chapter 2</span></div>
                <p style="margin-top: 10px;"><strong>Consejos:</strong> Una de las mejores unidades del juego. Holy Sword tiene excelente rango y daño. Mantenerla en su clase única es óptimo. Equiparla con Excalibur o Save the Queen.</p>
            </div>

            <div class="content-box">
                <h3>Cidolfus Orlandeau (TG Cid)</h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Sword Saint</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Swordplay (combina Holy Sword, Dark Sword, y Divine Knight)</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Automático en Chapter 4 (Bethla Garrison)</span></div>
                <p style="margin-top: 10px;"><strong>⚠️ GAMEBREAKER:</strong> TG Cid es considerado el personaje más roto del juego. Tiene acceso a TODAS las técnicas de sword skills (Holy Sword + Dark Sword + Divine Knight). No necesita cambiar de clase nunca. Puede solo completar el resto del juego.</p>
            </div>

            <div class="content-box">
                <h3>Mustadio Bunansa</h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Machinist</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Aimed Shot (Arm Aim, Leg Aim, Seal Evil)</span></div>
                <div class="stat-line"><span class="stat-label">Arma:</span> <span class="stat-value">Guns (ignoran evasión física)</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Automático en Chapter 2</span></div>
                <p style="margin-top: 10px;"><strong>Consejos:</strong> Útil para disable enemigos. Leg Aim impide movimiento, Arm Aim impide ataques. Guns siempre pegan (ignoran Evasion).</p>
            </div>

            <div class="content-box">
                <h3>Balthier - <span class="highlight">EXCLUSIVO WOTL</span></h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Sky Pirate</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Barrage (ataques con guns especiales)</span></div>
                <div class="stat-line"><span class="stat-label">Crossover:</span> <span class="stat-value">Final Fantasy XII</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Sidequest "The Wandering Blade" (Chapter 4)</span></div>
                <p style="margin-top: 10px;"><strong>Cómo reclutar:</strong> En Chapter 4, ve a Trade City of Sal Ghidos. Debe aparecer "Rumors" en el bar. Completa la secuencia de batallas. Stats balanceados pero su clase es limitada comparada con Orlandeau.</p>
            </div>

            <div class="content-box">
                <h3>Luso Clemens - <span class="highlight">EXCLUSIVO WOTL</span></h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Game Hunter</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Hunt (técnicas variadas de caza)</span></div>
                <div class="stat-line"><span class="stat-label">Crossover:</span> <span class="stat-value">Final Fantasy Tactics A2</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Sidequest "The Redleaf Turnabout" (Chapter 4)</span></div>
                <p style="margin-top: 10px;"><strong>Cómo reclutar:</strong> En Chapter 4, después de la batalla #56, una serie de eventos aparece en Zeltennia. Completa la chain de batallas.</p>
            </div>

            <div class="content-box">
                <h3>Cloud Strife</h3>
                <div class="stat-line"><span class="stat-label">Clase Única:</span> <span class="stat-value">Soldier</span></div>
                <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Limit (Cross-slash, Blade Beam, Finishing Touch, etc.)</span></div>
                <div class="stat-line"><span class="stat-label">Arma Única:</span> <span class="stat-value">Materia Blade (después Rune Blade)</span></div>
                <div class="stat-line"><span class="stat-label">Crossover:</span> <span class="stat-value">Final Fantasy VII</span></div>
                <div class="stat-line"><span class="stat-label">Reclutamiento:</span> <span class="stat-value">Sidequest compleja en Chapter 4</span></div>
                <p style="margin-top: 10px;"><strong>Cómo reclutar:</strong></p>
                <ol style="margin-left: 20px; margin-top: 10px;">
                    <li>Tener Mustadio en party</li>
                    <li>Comprar "flower" en Sal Ghidos (1000 gil)</li>
                    <li>Ir a Zarghidas Trade City tavern → rumor "Cursed Island"</li>
                    <li>Completar "The Haunted Mine" (Goug Machine City)</li>
                    <li>Completar "The Nelveska Temple" → conseguir Materia Blade</li>
                    <li>Random battle en Araguay Woods con Cloud como invitado</li>
                    <li>Gana la batalla y Cloud se une permanentemente</li>
                </ol>
                <p style="margin-top: 10px;"><strong>Nota:</strong> Cloud empieza débil. Necesita subir Brave ({'>'}60) para que sus Limits sean efectivos.</p>
            </div>

            <div class="content-box">
                <h3>Otros Personajes Notables</h3>
                
                <div class="job-item">
                    <h4>Meliadoul Tengille</h4>
                    <div class="stat-line"><span class="stat-label">Clase:</span> <span class="stat-value">Divine Knight</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Crush (destruye equipo enemigo - similar a Ruin pero mejor)</span></div>
                    <p style="margin-top: 10px;">Útil para destruir equipamiento de bosses. Reclutamiento en Chapter 4.</p>
                </div>

                <div class="job-item">
                    <h4>Beowulf Cadmus</h4>
                    <div class="stat-line"><span class="stat-label">Clase:</span> <span class="stat-value">Temple Knight</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Chicken (transforma enemigos en chickens y status ailments)</span></div>
                    <p style="margin-top: 10px;">Chicken es hilarious pero efectivo. Matrimonio con Reis lo potencia.</p>
                </div>

                <div class="job-item">
                    <h4>Reis Duelar</h4>
                    <div class="stat-line"><span class="stat-label">Clase:</span> <span class="stat-value">Dragonkin (después de sidequest)</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Dragon Soul (control de dragones)</span></div>
                    <p style="margin-top: 10px;">Transformar Reis de Holy Dragon requiere Beowulf en party. Potente mage/fighter hybrid.</p>
                </div>

                <div class="job-item">
                    <h4>Rapha & Marach Galthena</h4>
                    <div class="stat-line"><span class="stat-label">Clases:</span> <span class="stat-value">Heaven Knight / Hell Knight</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Sky Manipulation / Nether Manip (magia aleatoria)</span></div>
                    <p style="margin-top: 10px;">Hermanos con magia aleatoria. No muy confiables pero temáticos.</p>
                </div>
            </div>
