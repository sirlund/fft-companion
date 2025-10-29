<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Bosses</h2>
            
            <div class="content-box">
                <h3>Batallas Difíciles - Chapter 1-2</h3>
                
                <div class="job-item">
                    <h4>Dorter Slums - Algus + Archers</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐ (primera pared de dificultad)</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Algus (Knight), 2 Archers, 2 Knights</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Prioriza matar Archers. Usa Cover para proteger unidades débiles.</span></div>
                    <p style="margin-top: 10px;">Los Archers tienen Charge +1 y pegan desde lejos. Acércate rápido o usa magia de área.</p>
                </div>

                <div class="job-item">
                    <h4>Ziekden Fortress - Milleuda</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Milleuda (Fell Knight), Knights, Archers</span></div>
                    <div class="stat-line"><span class="stat-label">Debilidad:</span> <span class="stat-value">Vulnerable a status ailments</span></div>
                    <p style="margin-top: 10px;">Milleuda tiene Shadowblade. Usa Blind o Sleep para neutralizarla.</p>
                </div>

                <div class="job-item">
                    <h4>Fort Zeakden - Algus (Rematch)</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐⭐</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Algus mejorado + Knights/Archers</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Delita y Ramza atacan simultáneamente. Buff con Accumulate/Yell antes.</span></div>
                    <p style="margin-top: 10px;">Batalla final de Chapter 1. Algus está mucho más fuerte. Asegura tener Delita vivo.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Batallas Difíciles - Chapter 3-4</h3>
                
                <div class="job-item">
                    <h4>Riovanes Castle Rooftop - Wiegraf → Belias</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐⭐⭐ (la batalla más difícil del juego)</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Wiegraf 1v1 → Belias + Archaic Demons</span></div>
                    <div class="stat-line"><span class="stat-label">⚠️ PELIGRO:</span> <span class="stat-value">Solo Ramza vs Wiegraf. Si no estás preparado, puedes quedar stuck.</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia Fase 1:</span> <span class="stat-value">Yell × 2 o 3, luego Accumulate. Cuando Speed alto, attack.</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia Fase 2:</span> <span class="stat-value">Mata Archaic Demons primero. Belias usa Cyclops (área gigante).</span></div>
                    <p style="margin-top: 10px;"><strong>Preparación crítica:</strong> Antes de esta batalla, asegura que Ramza tenga: Yell/Accumulate aprendido, Auto-Potion, armadura fuerte, y level 25+. GUARDA en un slot diferente antes de entrar a Riovanes.</p>
                </div>

                <div class="job-item">
                    <h4>Riovanes Castle - Elmdore's Assassins</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐⭐</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Celia & Lede (Assassins) - ambas tienen Stop, Charm</span></div>
                    <div class="stat-line"><span class="stat-label">Debilidad:</span> <span class="stat-value">Vulnerables a Instant Death</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Ribbon para inmunidad a status. Mantén distancia o usa magia de área.</span></div>
                    <p style="margin-top: 10px;">Las Assassins usan Stop + Ultima. Extremadamente peligrosas. Ninja con Throw es efectivo.</p>
                </div>

                <div class="job-item">
                    <h4>Limberry Castle - Elmdore (Real)</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐⭐⭐</span></div>
                    <div class="stat-line"><span class="stat-label">Enemigos:</span> <span class="stat-value">Marquis Elmdore + Celia + Lede</span></div>
                    <div class="stat-line"><span class="stat-label">Equipo de Elmdore:</span> <span class="stat-value">Masamune (always First Strike), Genji equipment</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Muramasa (vampiric), Lightning Stab</span></div>
                    <div class="stat-line"><span class="stat-label">Inmune:</span> <span class="stat-value">Todos los status (Ribbon)</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Ninja con Speed Save. Catch/Steal sus Genji Gloves y Genji equipment.</span></div>
                    <p style="margin-top: 10px;"><strong>⭐ FARMEABLE:</strong> Esta es tu oportunidad de conseguir Genji equipment (Glove, Helm, Armor, Shield). Usa Thief con "Steal" o Ninja con "Catch". Elmdore tiene Safeguard innate, así que Steal tiene baja probabilidad. Catch funciona mejor pero requiere timing perfecto.</p>
                </div>

                <div class="job-item">
                    <h4>Deep Dungeon - Ultima Demon (Boss Secreto)</h4>
                    <div class="stat-line"><span class="stat-label">Dificultad:</span> <span class="stat-value">⭐⭐⭐⭐⭐</span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación:</span> <span class="stat-value">Deep Dungeon Basement 10 (TERMINE)</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Ultima, Dark Holy, Vengeance (counter)</span></div>
                    <div class="stat-line"><span class="stat-label">Inmune:</span> <span class="stat-value">Casi todos los status</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Shell/Protect party. Usa Holy o Flare. Evita ataques físicos (counter).</span></div>
                    <p style="margin-top: 10px;">Boss opcional más difícil. Requiere party level 80+. Reward: Chaos Blade.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Lucavi Battles (Bosses de Zodiac Stones)</h3>
                
                <div class="job-item">
                    <h4>Belias (Aries)</h4>
                    <div class="stat-line"><span class="stat-label">Batalla:</span> <span class="stat-value">Riovanes Castle Rooftop</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Fire</span></div>
                    <div class="stat-line"><span class="stat-label">Debilidad:</span> <span class="stat-value">Ice</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Cyclops (área gigante), Fire IV</span></div>
                    <p style="margin-top: 10px;">Prioriza matar Archaic Demons. Usa Ice magic si tienes.</p>
                </div>

                <div class="job-item">
                    <h4>Cuchulainn (Taurus)</h4>
                    <div class="stat-line"><span class="stat-label">Batalla:</span> <span class="stat-value">Underground Book Storage (Orbonne)</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Poison</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Bio 3, Deathspell (AoE death + status)</span></div>
                    <p style="margin-top: 10px;">⚠️ Extremadamente tóxico. Ribbon o Immunity accesorios esenciales.</p>
                </div>

                <div class="job-item">
                    <h4>Hashmal (Leo)</h4>
                    <div class="stat-line"><span class="stat-label">Batalla:</span> <span class="stat-value">Lionel Castle</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Earth</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Quake, Meteor</span></div>
                    <p style="margin-top: 10px;">Usa Float para evitar Quake. Meteor no puede ser evitado.</p>
                </div>

                <div class="job-item">
                    <h4>Zalera (Gemini)</h4>
                    <div class="stat-line"><span class="stat-label">Batalla:</span> <span class="stat-value">Limberry Castle</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Dark</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Level-based death spells, Stop</span></div>
                    <p style="margin-top: 10px;">Cuidado con Level 2 Holy, Level 3 Flare. Ajusta levels de tu party.</p>
                </div>

                <div class="job-item">
                    <h4>Altima (Final Boss)</h4>
                    <div class="stat-line"><span class="stat-label">Batalla:</span> <span class="stat-value">Orbonne Monastery, final floor</span></div>
                    <div class="stat-line"><span class="stat-label">Fases:</span> <span class="stat-value">2 (Holy Angel → Altima)</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Grand Cross (random status AoE), Ultima, Holy</span></div>
                    <div class="stat-line"><span class="stat-label">Debilidad:</span> <span class="stat-value">Ninguna</span></div>
                    <div class="stat-line"><span class="stat-label">Estrategia:</span> <span class="stat-value">Ribbon para inmunidad a Grand Cross. Shell/Protect. Orlando Cid trivializa esta batalla.</span></div>
                    <p style="margin-top: 10px;">Boss final. Requiere level 50+ recomendado. Grand Cross puede wipe party sin Ribbon.</p>
                </div>
            </div>
