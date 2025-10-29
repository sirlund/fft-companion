<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Maps</h2>
            
            <div class="content-box">
                <h3>Información sobre Maps</h3>
                <p>Los mapas tienen tesoros escondidos, trampas, y diferentes configuraciones de terreno. Algunos maps tienen random encounters con rare monsters para Poaching.</p>
            </div>

            <div class="content-box">
                <h3>Mapas con Tesoros Importantes</h3>
                
                <div class="job-item">
                    <h4>Lionel Castle</h4>
                    <div class="stat-line"><span class="stat-label">Tesoros:</span> <span class="stat-value">Save the Queen (espada de Agrias)</span></div>
                    <div class="stat-line"><span class="stat-label">Ubicación del tesoro:</span> <span class="stat-value">Hidden chest en la parte alta del mapa</span></div>
                    <p style="margin-top: 10px;">Uno de los tesoros más importantes del juego para Agrias.</p>
                </div>

                <div class="job-item">
                    <h4>Deep Dungeon (Todos los pisos)</h4>
                    <div class="stat-line"><span class="stat-label">Tesoros:</span> <span class="stat-value">Excalibur, Ragnarok, Ribbon, Genji equipment, etc.</span></div>
                    <div class="stat-line"><span class="stat-label">Acceso:</span> <span class="stat-value">Chapter 4, requiere completar sidequests previas</span></div>
                    <div class="stat-line"><span class="stat-label">Pisos:</span> <span class="stat-value">10 niveles (NOGIAS → TERMINATE)</span></div>
                    <p style="margin-top: 10px;">La mejor fuente de top-tier equipment. Cada piso tiene múltiples chests. Random encounters tienen rare monsters (Sacred, Behemoth King, etc.).</p>
                </div>

                <div class="job-item">
                    <h4>Nelveska Temple</h4>
                    <div class="stat-line"><span class="stat-label">Tesoros:</span> <span class="stat-value">Zodiac Ore (Capricorn), Barette, Sasuke's Blade</span></div>
                    <div class="stat-line"><span class="stat-label">Acceso:</span> <span class="stat-value">Sidequest con Mustadio (Chapter 4)</span></div>
                    <div class="stat-line"><span class="stat-label">Boss:</span> <span class="stat-value">Construct 8 (robot)</span></div>
                    <p style="margin-top: 10px;">Sidequest que requiere Mustadio. Materia Blade (para reclutar Cloud) está aquí.</p>
                </div>

                <div class="job-item">
                    <h4>Goug Machine City</h4>
                    <div class="stat-line"><span class="stat-label">Tesoros:</span> <span class="stat-value">Glacier Gun, Blaze Gun</span></div>
                    <div class="stat-line"><span class="stat-label">Acceso:</span> <span class="stat-value">Sidequest "The Haunted Mine" con Mustadio</span></div>
                    <p style="margin-top: 10px;">Primera parte de la chain para reclutar Cloud.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Mapas con Random Encounters Importantes</h3>
                
                <div class="job-item">
                    <h4>Zigolis Swamp</h4>
                    <div class="stat-line"><span class="stat-label">Rare Monsters:</span> <span class="stat-value">Red Dragon (Poach → Murasame)</span></div>
                    <p style="margin-top: 10px;">Farmear Red Dragon aquí para conseguir Murasame katana.</p>
                </div>

                <div class="job-item">
                    <h4>Mandalia Plains</h4>
                    <div class="stat-line"><span class="stat-label">Rare Monsters:</span> <span class="stat-value">Behemoth (Poach → Bracer)</span></div>
                    <p style="margin-top: 10px;">Uno de los mejores lugares para farmear Behemoth temprano en el juego.</p>
                </div>

                <div class="job-item">
                    <h4>Araguay Woods</h4>
                    <div class="stat-line"><span class="stat-label">Especial:</span> <span class="stat-value">Cloud aparece aquí como invitado (después de Nelveska Temple)</span></div>
                    <p style="margin-top: 10px;">Trigger battle para reclutar a Cloud definitivamente.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Tips de Exploración</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li style="margin: 10px 0;">Usa Move-Find Item ability para revelar tesoros escondidos</li>
                    <li style="margin: 10px 0;">En iOS version, puedes rotar cámara 360° para encontrar chests ocultos detrás de objetos</li>
                    <li style="margin: 10px 0;">Algunos mapas tienen trampas (Death Sentence tiles, Darkness tiles)</li>
                    <li style="margin: 10px 0;">Geomancer's Elemental depende del tipo de terrain del tile</li>
                    <li style="margin: 10px 0;">Deep Dungeon rewards: NOGIAS (B1), DELTA (B2), BRAVE (B3), FAITH (B4), HOLY (B5), HEAVEN (B6), SAINT (B7), WATER (B8), TIGER (B9), TERMINATE (B10)</li>
                </ul>
            </div>
