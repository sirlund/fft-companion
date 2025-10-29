<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Monsters</h2>
            
            <div class="content-box">
                <h3>Información sobre Monsters</h3>
                <p>Los monstruos aparecen en random encounters y algunas batallas de la historia. Algunos pueden ser invitados al party con Mediator o capturados con Beastmaster. Todos los monstruos pueden ser Poached para obtener items únicos.</p>
            </div>

            <div class="content-box">
                <h3>Monstruos Comunes</h3>
                
                <div class="job-item">
                    <h4>Goblin</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Goblin</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Goblin Punch, Tackle</span></div>
                    <div class="stat-line"><span class="stat-label">Debilidad:</span> <span class="stat-value">Thunder</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value">Mythril Knife, Eye Drop</span></div>
                    <p style="margin-top: 10px;">Monstruo básico. Aparece en early game.</p>
                </div>

                <div class="job-item">
                    <h4>Chocobo</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Chocobo</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Choco Attack, Choco Cure, Choco Esuna</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value">Phoenix Down, Soft</span></div>
                    <p style="margin-top: 10px;">Pueden ser útiles como soporte. Choco Meteor es poderoso en Red/Black Chocobos.</p>
                </div>

                <div class="job-item">
                    <h4>Bomb</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Bomb</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Self-Destruct, Spark</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Absorbe Fire, débil a Ice</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value">Phoenix Down, Bomb Fragment</span></div>
                    <p style="margin-top: 10px;">⚠️ Cuidado con Self-Destruct. Causa daño masivo en área.</p>
                </div>

                <div class="job-item">
                    <h4>Panther</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Feline</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Triple Attack, Beso Toxico</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value">Phoenix Down, Antidote</span></div>
                    <p style="margin-top: 10px;">Rápido y evasivo. Triple Attack puede ser mortal.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Monstruos Raros - Poaching Importante</h3>
                
                <div class="job-item">
                    <h4>Red Dragon</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Dragon</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Fire Breath, Wing Attack</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Absorbe Fire, débil a Ice</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value"><strong>Murasame (katana)</strong>, Dragon Heart</span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación:</span> <span class="stat-value">Zigolis Swamp (raro)</span></div>
                    <p style="margin-top: 10px;">⭐ Poaching Red Dragon es la única forma de conseguir Murasame katana.</p>
                </div>

                <div class="job-item">
                    <h4>Behemoth</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Beast</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Wild Boar, Chicken Race</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value"><strong>Bracer</strong> (+3 PA accessory)</span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación:</span> <span class="stat-value">Mandalia Plains, Deep Dungeon</span></div>
                    <p style="margin-top: 10px;">⭐ Bracer es el mejor accesorio de PA. Vale la pena farmear.</p>
                </div>

                <div class="job-item">
                    <h4>Sacred</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Dragon</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Holy Breath, Dragon Dive</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value"><strong>Chantage</strong> (+3 MA), <strong>Reflect Mail</strong></span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación:</span> <span class="stat-value">Deep Dungeon (muy raro)</span></div>
                    <p style="margin-top: 10px;">⭐ Poaching Sacred da los mejores items de mago del juego.</p>
                </div>

                <div class="job-item">
                    <h4>Plague</h4>
                    <div class="stat-line"><span class="stat-label">Tipo:</span> <span class="stat-value">Undead</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidades:</span> <span class="stat-value">Zombie Touch, Beso Toxico</span></div>
                    <div class="stat-line"><span class="stat-label">Poach:</span> <span class="stat-value"><strong>Ribbon</strong> (inmune a todos los status)</span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación:</span> <span class="stat-value">Deep Dungeon (raro)</span></div>
                    <p style="margin-top: 10px;">⭐ Ribbon es el mejor accesorio defensivo. Difícil de conseguir pero esencial.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Tips de Poaching</h3>
                <div class="stat-line"><span class="stat-label">Requisito:</span> <span class="stat-value">Thief Lv5 + Lancer Lv4 = Orator → aprende Beastmaster</span></div>
                <div class="stat-line"><span class="stat-label">Cómo funciona:</span> <span class="stat-value">Usa "Poach" en monstruo con HP bajo ({'<'} 20%)</span></div>
                <div class="stat-line"><span class="stat-label">Resultado:</span> <span class="stat-value">Mata al monstruo y da 2 items diferentes (random de su loot table)</span></div>
                <p style="margin-top: 10px;">⚠️ <strong>IMPORTANTE:</strong> Poaching es la ÚNICA forma de conseguir muchos items top-tier como Murasame, Bracer, Chantage, y Ribbon. Vale la pena invertir en un Orator con Beastmaster.</p>
            </div>
