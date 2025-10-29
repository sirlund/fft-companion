<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection, searchValue = $bindable(''), onkeyup } = $props();

  // Random gender selection for job portraits (Male or Female)
  const randomGender = () => Math.random() < 0.5 ? 'm' : 'f';

  // Generate gender for each job card (called once on mount)
  const jobGenders = {
    squire: randomGender(),
    chemist: randomGender(),
    knight: randomGender(),
    archer: randomGender(),
    white_mage: randomGender(),
    black_mage: randomGender(),
    monk: randomGender(),
    thief: randomGender(),
    time_mage: randomGender(),
    mystic: randomGender(),
    geomancer: randomGender(),
    dragoon: randomGender(),
    summoner: randomGender(),
    orator: randomGender(),
    samurai: randomGender(),
    ninja: randomGender(),
    arithmetician: randomGender(),
    bard: 'm', // Gender-locked: Male only
    dancer: 'f', // Gender-locked: Female only
    mime: randomGender(),
    dark_knight: randomGender(),
    onion_knight: randomGender()
  };
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Jobs</h2>
            <SearchBox placeholder="Buscar job..." bind:value={searchValue} {onkeyup} />

            <!-- LEYENDA DE RATINGS -->
            <div class="content-box" style="margin-bottom: 30px; background: rgba(212, 175, 55, 0.1);">
                <h3 style="font-size: 1.2em; margin-bottom: 10px;">📊 Leyenda de Stats</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; font-size: 0.9em;">
                    <div><span class="stat-rating s" style="font-size: 1.2em;">S</span> = Excepcional (raro)</div>
                    <div><span class="stat-rating a" style="font-size: 1.2em;">A</span> = Excelente</div>
                    <div><span class="stat-rating b" style="font-size: 1.2em;">B</span> = Bueno</div>
                    <div><span class="stat-rating c" style="font-size: 1.2em;">C</span> = Promedio</div>
                    <div><span class="stat-rating d" style="font-size: 1.2em;">D</span> = Bajo</div>
                </div>
                <p style="margin-top: 10px; font-size: 0.85em; font-style: italic; color: #b8a080;">
                    Los ratings indican el crecimiento de stats al subir de nivel. <strong>A</strong> significa alto crecimiento, <strong>D</strong> significa bajo crecimiento.
                </p>
            </div>

            <!-- TIER 1: CLASES INICIALES -->
            <div class="job-tier">
                <h3 class="tier-title">⚔️ Tier 1: Clases Iniciales</h3>
                <div class="jobs-row">
                    <!-- SQUIRE -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Squire</div>
                            <div class="job-icon"><img src="assets/jobs/squire_{jobGenders.squire}.gif" alt="Squire" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge none">✓ Inicial</span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🎯 Fundaments</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Item, Throw Stone, Heal, Dash</div>
                        </div>
                        <div class="job-description">Clase inicial básica. Desbloquea otras clases.</div>
                    </div>

                    <!-- CHEMIST -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Chemist</div>
                            <div class="job-icon"><img src="assets/jobs/chemist_{jobGenders.chemist}.gif" alt="Chemist" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge none">✓ Inicial</span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">💊 Item</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Uso de items con rango extendido</div>
                        </div>
                        <div class="job-description">Excelente velocidad. Items a distancia. Soporte inicial.</div>
                    </div>
                </div>
            </div>

            <!-- TIER 2: CLASES BÁSICAS -->
            <div class="job-tier">
                <h3 class="tier-title">⚔️ Tier 2: Clases Básicas</h3>
                <div class="jobs-row">
                    <!-- KNIGHT -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Knight</div>
                            <div class="job-icon"><img src="assets/jobs/knight_{jobGenders.knight}.gif" alt="Knight" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Squire <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">💥 Ruin (Break)</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Destruye equipo enemigo</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Acceso a las mejores armaduras del juego</div>
                            <div class="bonus-item">Puede usar Heavy Armor y Shields</div>
                        </div>
                        <div class="job-description">Tank físico. Alto HP y PA. Mejores armaduras.</div>
                    </div>

                    <!-- ARCHER -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Archer</div>
                            <div class="job-icon"><img src="assets/jobs/archer_{jobGenders.archer}.gif" alt="Archer" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Squire <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🎯 Aim</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Ataques de status a distancia</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Charge +1: Aumenta rango de arcos y crossbows</div>
                        </div>
                        <div class="job-description">Rango largo. Charge +1. Control de campo.</div>
                    </div>

                    <!-- WHITE MAGE -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">White Mage</div>
                            <div class="job-icon"><img src="assets/jobs/white_mage_{jobGenders.white_mage}.gif" alt="White Mage" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Chemist <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">✨ White Magick</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Cure, Raise, Reraise, Holy</div>
                        </div>
                        <div class="job-description">Curación principal. Fundamental para supervivencia.</div>
                    </div>

                    <!-- BLACK MAGE -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Black Mage</div>
                            <div class="job-icon"><img src="assets/jobs/black_mage_{jobGenders.black_mage}.gif" alt="Black Mage" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Chemist <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🔥 Black Magick</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Fire, Ice, Thunder, Flare series</div>
                        </div>
                        <div class="job-description">Daño mágico elemental. Alto MA.</div>
                    </div>
                </div>
            </div>

            <!-- TIER 3: CLASES INTERMEDIAS -->
            <div class="job-tier">
                <h3 class="tier-title">⚔️ Tier 3: Clases Intermedias</h3>
                <div class="jobs-row">
                    <!-- MONK -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Monk</div>
                            <div class="job-icon"><img src="assets/jobs/monk_{jobGenders.monk}.gif" alt="Monk" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Knight <span class="level">Lv.3</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">👊 Martial Arts</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Chakra, Wave Fist, Earth Slash</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Martial Arts: Daño sin arma = PA × (PA/2)</div>
                        </div>
                        <div class="job-description">Combate cuerpo a cuerpo. Revive aliados, excelente PA y Speed.</div>
                    </div>

                    <!-- THIEF -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Thief</div>
                            <div class="job-icon"><img src="assets/jobs/thief_{jobGenders.thief}.gif" alt="Thief" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Archer <span class="level">Lv.3</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">💰 Steal</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Steal Heart, Steal Weapon, Gil</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Move +2</div>
                            <div class="bonus-item">Innate: Treasure Hunter</div>
                        </div>
                        <div class="job-description">Velocidad máxima. Útil para conseguir items raros.</div>
                    </div>

                    <!-- TIME MAGE -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Time Mage</div>
                            <div class="job-icon"><img src="assets/jobs/time_mage_{jobGenders.time_mage}.gif" alt="Time Mage" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Black Mage <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">⏱️ Time Magick</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Haste, Slow, Stop, Quick</div>
                        </div>
                        <div class="job-description">Control de velocidad. Crítico para estrategia.</div>
                    </div>

                    <!-- MYSTIC -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Mystic</div>
                            <div class="job-icon"><img src="assets/jobs/mystic_{jobGenders.mystic}.gif" alt="Mystic" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">White Mage <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🔮 Mystic Arts</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Confuse, Silence, Blind, Sleep</div>
                        </div>
                        <div class="job-description">Status ailments. Control de enemigos.</div>
                    </div>

                    <!-- GEOMANCER -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Geomancer</div>
                            <div class="job-icon"><img src="assets/jobs/geomancer_{jobGenders.geomancer}.gif" alt="Geomancer" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Monk <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🌍 Elemental</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Magia sin MP, basada en terreno</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Ignora terreno (Move on Lava/Water)</div>
                        </div>
                        <div class="job-description">Magia sin costo de MP. Dependiente del terreno.</div>
                    </div>

                    <!-- DRAGOON -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Dragoon</div>
                            <div class="job-icon"><img src="assets/jobs/dragoon_{jobGenders.dragoon}.gif" alt="Dragoon" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Thief <span class="level">Lv.4</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🐉 Jump</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Ataques aéreos, ignora evasión</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Jump +3 (Vertical Jump 8 total)</div>
                            <div class="bonus-item">Los ataques Jump ignoran evasión completamente</div>
                        </div>
                        <div class="job-description">Jump ignora evasión. Vertical Jump 8. Anti-voladores.</div>
                    </div>

                    <!-- SUMMONER -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Summoner</div>
                            <div class="job-icon"><img src="assets/jobs/summoner_{jobGenders.summoner}.gif" alt="Summoner" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Time Mage <span class="level">Lv.3</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">S <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">✨ Summon</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Shiva, Ifrit, Ramuh, Bahamut, Odin</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">MP Growth #1 del juego (125%)</div>
                            <div class="bonus-item">Summons ignoran friendly fire (no dañan aliados)</div>
                        </div>
                        <div class="job-description">Daño de área masivo. AoE gigante. Alto costo de MP.</div>
                    </div>

                    <!-- ORATOR -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Orator</div>
                            <div class="job-icon"><img src="assets/jobs/orator_{jobGenders.orator}.gif" alt="Orator" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Mystic <span class="level">Lv.3</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">📢 Speechcraft</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Praise/Brave, Preach/Faith, Recruit</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Manipula Brave/Faith permanentemente</div>
                            <div class="bonus-item">Puede reclutar enemigos humanos y monstruos</div>
                            <div class="bonus-item">Innate: Beast Tongue (hablar con monstruos)</div>
                        </div>
                        <div class="job-description">Útil para recruiting. Cambia stats permanentemente. Sin costo de MP.</div>
                    </div>
                </div>
            </div>

            <!-- TIER 4: CLASES AVANZADAS -->
            <div class="job-tier">
                <h3 class="tier-title">⚔️ Tier 4: Clases Avanzadas</h3>
                <div class="jobs-row">
                    <!-- SAMURAI -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Samurai</div>
                            <div class="job-icon"><img src="assets/jobs/samurai_{jobGenders.samurai}.gif" alt="Samurai" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Knight <span class="level">Lv.4</span></span>
                                <span class="req-badge">Monk <span class="level">Lv.5</span></span>
                                <span class="req-badge">Dragoon <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">⚡ Iaido</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Muramasa, Chirijiraden</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Shirahadori: Puede esquivar ataques físicos (Brave-based)</div>
                        </div>
                        <div class="job-description">Daño masivo. Shirahadori (esquiva físicos).</div>
                    </div>

                    <!-- NINJA -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Ninja</div>
                            <div class="job-icon"><img src="assets/jobs/ninja_{jobGenders.ninja}.gif" alt="Ninja" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Archer <span class="level">Lv.4</span></span>
                                <span class="req-badge">Thief <span class="level">Lv.5</span></span>
                                <span class="req-badge">Geomancer <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🥷 Throw</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Lanzar armas y shurikens</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Two Swords (Dual Wield): Ataca dos veces por turno</div>
                            <div class="bonus-item">Innate: Sunken State (inmune a trampas de terreno)</div>
                        </div>
                        <div class="job-description">Velocidad máxima. Two Swords. Evasión excelente.</div>
                    </div>

                    <!-- CALCULATOR -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Calculator</div>
                            <div class="job-icon"><img src="assets/jobs/arithmetician_{jobGenders.arithmetician}.gif" alt="Calculator" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">White Mage <span class="level">Lv.4</span></span>
                                <span class="req-badge">Black Mage <span class="level">Lv.4</span></span>
                                <span class="req-badge">Mystic <span class="level">Lv.2</span></span>
                                <span class="req-badge">Time Mage <span class="level">Lv.2</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">D <span class="stat-rating d">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🧮 Math Skill</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">CT5 Holy, Level 4 Holy</div>
                        </div>
                        <div class="job-description">⚠️ GAMEBREAKING. Magia sin charge basada en números.</div>
                    </div>

                    <!-- BARD -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Bard</div>
                            <div class="job-icon"><img src="assets/jobs/bard_{jobGenders.bard}.gif" alt="Bard" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Summoner <span class="level">Lv.5</span></span>
                                <span class="req-badge">Orator <span class="level">Lv.5</span></span>
                            </div>
                            <div style="font-size: 0.8em; color: #f39c12; margin-top: 5px;">♂️ Solo Masculino</div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🎵 Sing</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Battle Song, Nameless Song</div>
                        </div>
                        <div class="job-description">Buffs de área permanentes hasta muerte/silence.</div>
                    </div>

                    <!-- DANCER -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Dancer</div>
                            <div class="job-icon"><img src="assets/jobs/dancer_{jobGenders.dancer}.gif" alt="Dancer" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Geomancer <span class="level">Lv.5</span></span>
                                <span class="req-badge">Dragoon <span class="level">Lv.5</span></span>
                            </div>
                            <div style="font-size: 0.8em; color: #e91e63; margin-top: 5px;">♀️ Solo Femenino</div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">💃 Dance</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Slow Dance, Polka, Nameless</div>
                        </div>
                        <div class="job-description">Status ailments aleatorios de área.</div>
                    </div>

                    <!-- MIME -->
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-name">Mime</div>
                            <div class="job-icon"><img src="assets/jobs/mime_{jobGenders.mime}.gif" alt="Mime" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Squire <span class="level">Lv.8</span></span>
                                <span class="req-badge">Chemist <span class="level">Lv.8</span></span>
                                <span class="req-badge">Summoner <span class="level">Lv.5</span></span>
                                <span class="req-badge">Orator <span class="level">Lv.5</span></span>
                                <span class="req-badge">Dragoon <span class="level">Lv.5</span></span>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🎭 Mimic</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Copia última acción ejecutada</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Puede equipar TODO el equipo del juego (sin restricciones)</div>
                            <div class="bonus-item">Mimic no consume MP ni items</div>
                        </div>
                        <div class="job-description">Versátil. Copia sin costo. Equipa TODO.</div>
                    </div>

                    <!-- DARK KNIGHT -->
                    <div class="job-card exclusive-wotl">
                        <div class="job-header">
                            <div class="job-name">Dark Knight</div>
                            <div class="job-icon"><img src="assets/jobs/dark_knight_{jobGenders.dark_knight}.gif" alt="Dark Knight" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Knight <span class="level">Lv.8</span></span>
                                <span class="req-badge">Black Mage <span class="level">Lv.8</span></span>
                                <span class="req-badge">Dragoon <span class="level">Lv.8</span></span>
                                <span class="req-badge">Samurai <span class="level">Lv.8</span></span>
                                <span class="req-badge">Ninja <span class="level">Lv.8</span></span>
                                <span class="req-badge">Geomancer <span class="level">Lv.8</span></span>
                            </div>
                            <div style="font-size: 0.8em; color: #e74c3c; margin-top: 5px;">⚠️ + 20 Kills (human enemies)</div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🌑 Darkness</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Dark Sword, Night Sword (consume HP)</div>
                        </div>
                        <div class="job-description">⚠️ Daño masivo a costa de HP propio. Muy poderoso.</div>
                    </div>

                    <!-- ONION KNIGHT -->
                    <div class="job-card exclusive-wotl">
                        <div class="job-header">
                            <div class="job-name">Onion Knight</div>
                            <div class="job-icon"><img src="assets/jobs/onion_knight_{jobGenders.onion_knight}.gif" alt="Onion Knight" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div class="requirements-section">
                            <div class="req-title">Requisitos:</div>
                            <div class="req-badges">
                                <span class="req-badge">Squire <span class="level">Lv.6</span></span>
                                <span class="req-badge">Chemist <span class="level">Lv.6</span></span>
                            </div>
                            <div style="font-size: 0.8em; color: #e74c3c; margin-top: 5px;">⚠️ Requiere masterizar 14 jobs para máximo poder</div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">★ → ★★★★★ <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">★ → ★★★ <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">★★★ <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">★ → ★★★★★ <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">★ → ★★★ <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🧅 None</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Sin habilidades propias (usa equipo)</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Bonos Especiales</div>
                            <div class="bonus-item">Poder escala con jobs masterizados (2 jobs = 1 nivel OK)</div>
                            <div class="bonus-item">Puede equipar TODO (incluso equipo de género opuesto)</div>
                            <div class="bonus-item">Acceso a Onion Equipment (extremadamente poderoso)</div>
                            <div class="bonus-item">❌ No cuentan: Squire, Chemist, Mime, Dark Knight</div>
                        </div>
                        <div class="job-description">⭐ Endgame job. Débil al inicio, extremadamente poderoso con 14 jobs masterizados.</div>
                    </div>
                </div>
            </div>

            <!-- SPECIAL CHARACTER JOBS -->
            <div class="job-tier" style="margin-top: 60px; border-top: 3px solid #d4af37; padding-top: 40px;">
                <h3 class="tier-title" style="color: #f4cf67; font-size: 2em;">⭐ Special Character Jobs (Unique)</h3>
                <p style="text-align: center; color: #b8a080; margin-bottom: 30px; font-style: italic;">
                    Jobs exclusivos de personajes únicos. No se pueden desbloquear para unidades genéricas.
                </p>
                <div class="jobs-row">
                    <!-- HOLY KNIGHT -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Holy Knight</div>
                            <div class="job-icon"><img src="assets/jobs/agrias.gif" alt="Holy Knight" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Agrias Oaks / Delita Heiral
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">⚔️ Holy Sword</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Judgment Blade, Hallowed Bolt, Divine Ruination</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">100% Hit Rate en Holy Sword abilities</div>
                            <div class="bonus-item">25% chance de status secundario (Stop, Silence)</div>
                            <div class="bonus-item">Requiere Knight Sword o Sword equipado</div>
                        </div>
                        <div class="job-description">Elite knight con Holy-elemental abilities. Agrias se une en Ch.2.</div>
                    </div>

                    <!-- DIVINE KNIGHT -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Divine Knight</div>
                            <div class="job-icon"><img src="assets/jobs/meliadoul.gif" alt="Divine Knight" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Meliadoul Tingel
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🗡️ Mighty Sword</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Shellburst Stab, Hellcry Punch, Icewolf Bite</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">100% Success Rate al romper equipo</div>
                            <div class="bonus-item">Daña HP + Destruye Armor/Weapon/Accessory/Helmet</div>
                            <div class="bonus-item">Inútil contra monstruos (no tienen equipo)</div>
                        </div>
                        <div class="job-description">Equipment breaker definitivo. Se une en Ch.4 en Limberry Castle.</div>
                    </div>

                    <!-- SWORD SAINT -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Sword Saint</div>
                            <div class="job-icon"><img src="assets/jobs/orlandeau.gif" alt="Sword Saint" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Cidolfus Orlandeau (Thunder God Cid)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">S <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">S <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">⚡ All Swordskill</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Holy Sword, Iaido, Mighty Sword combinados</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">⚠️ GAMEBREAKING: El personaje más fuerte del juego</div>
                            <div class="bonus-item">Tiene TODAS las habilidades de espada (3 sets completos)</div>
                            <div class="bonus-item">Stats superiores a cualquier generic job</div>
                        </div>
                        <div class="job-description">Legendario "Thunder God". Se une en Ch.4. Rompe el balance del juego.</div>
                    </div>

                    <!-- SKY PIRATE -->
                    <div class="job-card exclusive-wotl" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Sky Pirate</div>
                            <div class="job-icon"><img src="assets/jobs/balthier.gif" alt="Sky Pirate" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Balthier (FF12 Guest)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">S <span class="stat-rating s">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🏴‍☠️ Plunder</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Versión mejorada de Steal + Guns</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">+10% Success Rate vs Steal normal</div>
                            <div class="bonus-item">Speed Growth #1 (mejor que todos los jobs)</div>
                            <div class="bonus-item">Innate: Safeguard (inmune a Steal/Plunder)</div>
                        </div>
                        <div class="job-description">WotL exclusive guest. Machinist mejorado + Thief. Sidequest opcional.</div>
                    </div>

                    <!-- TEMPLAR -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Templar</div>
                            <div class="job-icon"><img src="assets/jobs/beowulf.gif" alt="Templar" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Beowulf Cadmus
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🛡️ Magick Break</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Chicken, Toad, Stone, Stop status</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">Status ailments permanentes (no temporales)</div>
                            <div class="bonus-item">Rango largo sin necesidad de armas especiales</div>
                            <div class="bonus-item">Reclutable en sidequest después de Lesalia</div>
                        </div>
                        <div class="job-description">Status breaker definitivo. Pareja de Reis. Sidequest Ch.4.</div>
                    </div>

                    <!-- MACHINIST -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Machinist</div>
                            <div class="job-icon"><img src="assets/jobs/mustadio.gif" alt="Machinist" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Mustadio Bunansa
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🔫 Aimed Shot</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Arm Aim, Leg Aim, Seal Evil</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">Guns ignoran evasión y terreno</div>
                            <div class="bonus-item">Status ailments a partes del cuerpo específicas</div>
                            <div class="bonus-item">Se une permanentemente en Ch.2 (Goug)</div>
                        </div>
                        <div class="job-description">Ingeniero con armas de fuego. Útil early-game para control.</div>
                    </div>

                    <!-- SKYSEER -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Skyseer</div>
                            <div class="job-icon"><img src="assets/jobs/rafa.gif" alt="Skyseer" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Rafa Galthena (Heaven Knight)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">☁️ Sky Mantra (Truth)</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Heaven Thunder, Asura, Diamond Sword, Celestial Void</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">⚠️ RANDOM: Golpea entre 1-10 veces por cast</div>
                            <div class="bonus-item">Ignora Faith y Reflect, sin costo de MP</div>
                            <div class="bonus-item">Daño elemental de área (Fire/Lightning/Wind/Water/Earth)</div>
                            <div class="bonus-item">Se une en Ch.3 (Riovanes Castle)</div>
                        </div>
                        <div class="job-description">Heaven Knight. Hermana de Malak. Hechizos "Truth" random pero poderosos.</div>
                    </div>

                    <!-- NETHERSEER -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Netherseer</div>
                            <div class="job-icon"><img src="assets/jobs/malak.gif" alt="Netherseer" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Malak Galthena (Hell Knight)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🌑 Nether Mantra (Untruth)</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Hell's Wrath, Nether Blade, Nether Ashura, Corporeal Void</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">⚠️ RANDOM: Golpea entre 1-10 veces por cast</div>
                            <div class="bonus-item">Daño INVERSO a Faith (menor Faith = más daño)</div>
                            <div class="bonus-item">Mejor PA que Rafa, peor MA (necesita MA Boost)</div>
                            <div class="bonus-item">Se une en Ch.3 (Riovanes Castle)</div>
                        </div>
                        <div class="job-description">Hell Knight. Hermano de Rafa. "Untruth" basado en falta de fe.</div>
                    </div>

                    <!-- DRAGONKIN -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Dragonkin</div>
                            <div class="job-icon"><img src="assets/jobs/reis.gif" alt="Dragonkin" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Reis Duelar (Holy Dragon)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🐲 Dragon Magicks</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Reis's Breath, Dragon's Gift, Dragon's Charm</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">Único hybrid humano-dragón del juego</div>
                            <div class="bonus-item">Buffs de área + daño elemental + curación</div>
                            <div class="bonus-item">Reclutable en sidequest Ch.4 (con Beowulf)</div>
                        </div>
                        <div class="job-description">Ex-Holy Dragon transformada en humana. Support + offense hybrid.</div>
                    </div>

                    <!-- GAME HUNTER -->
                    <div class="job-card exclusive-wotl" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Game Hunter</div>
                            <div class="job-icon"><img src="assets/jobs/luso.gif" alt="Game Hunter" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Luso Clemens (FFTA2 Guest)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">🎯 Hunt</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Abilities especializadas en cacería</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">WotL exclusive character (crossover FFTA2)</div>
                            <div class="bonus-item">Versátil: combat + soporte</div>
                            <div class="bonus-item">Sidequest opcional en WotL</div>
                        </div>
                        <div class="job-description">WotL exclusive. Joven cazador del mundo de Ivalice.</div>
                    </div>

                    <!-- SOLDIER -->
                    <div class="job-card" style="border-color: #f4cf67;">
                        <div class="job-header">
                            <div class="job-name">Soldier</div>
                            <div class="job-icon"><img src="assets/jobs/cloud.gif" alt="Soldier" style="width: 100%; height: 100%; object-fit: contain;"></div>
                        </div>
                        <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
                            Cloud Strife (FF7 Guest)
                        </div>
                        <div class="stats-grid">
                            <div class="stat-item-grid"><span class="stat-label-grid">HP:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MP:</span> <span class="stat-value-grid">B <span class="stat-rating b">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">Speed:</span> <span class="stat-value-grid">C <span class="stat-rating c">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">PA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                            <div class="stat-item-grid"><span class="stat-label-grid">MA:</span> <span class="stat-value-grid">A <span class="stat-rating a">●</span></span></div>
                        </div>
                        <div class="job-abilities">
                            <div class="ability-name">⚡ Limit</div>
                            <div style="font-size: 0.8em; color: #c4b5a0;">Braver, Cross-Slash, Meteorain, Finishing Touch, Omnislash</div>
                        </div>
                        <div class="job-bonuses">
                            <div class="bonus-title">⭐ Características</div>
                            <div class="bonus-item">⚠️ REQUIERE: Materia Blade equipado para usar Limit</div>
                            <div class="bonus-item">Límit Breaks de FF7 + Cherry Blossom (único de FFT)</div>
                            <div class="bonus-item">Daño basado en MA (no PA), largo Charge Time</div>
                            <div class="bonus-item">⚠️ Empieza nivel 1 (mejorado en Ivalice Chronicles)</div>
                        </div>
                        <div class="job-description">Crossover FF7. Sidequest complejo: Mustadio → Goug Machine → Sal Ghidos.</div>
                    </div>
                </div>
            </div>
