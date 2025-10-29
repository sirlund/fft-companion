<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection, searchValue = $bindable(''), onkeyup } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Equipment</h2>
            <SearchBox placeholder="Search equipment..." bind:value={searchValue} {onkeyup} />
            
            <div class="content-box">
                <h3>Armas - Swords (Espadas)</h3>
                
                <div class="equipment-item">
                    <h4>Excalibur</h4>
                    <div class="stat-line"><span class="stat-label">WP:</span> <span class="stat-value">18</span></div>
                    <div class="stat-line"><span class="stat-label">Element:</span> <span class="stat-value">Holy</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +2</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Deep Dungeon B10 treasure o robar de Samurai</span></div>
                    <p style="margin-top: 10px;">Una de las mejores espadas del juego. Elemento Holy muy útil.</p>
                </div>

                <div class="equipment-item">
                    <h4>Save the Queen</h4>
                    <div class="stat-line"><span class="stat-label">WP:</span> <span class="stat-value">16</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">MA +3, PA +3</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Lionel Castle treasure chest</span></div>
                    <p style="margin-top: 10px;">Espada única de Agrias. Balanceada para hybrid builds.</p>
                </div>

                <div class="equipment-item">
                    <h4>Chaos Blade</h4>
                    <div class="stat-line"><span class="stat-label">WP:</span> <span class="stat-value">40</span></div>
                    <div class="stat-line"><span class="stat-label">Element:</span> <span class="stat-value">Dark</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +3</span></div>
                    <div class="stat-line"><span class="stat-label">Status:</span> <span class="stat-value">Confuse, Berserk (auto)</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Deep Dungeon treasure</span></div>
                    <p style="margin-top: 10px;">WP más alto del juego, pero causa Confuse/Berserk al portador. Muy riesgoso.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Armas - Katanas</h3>
                
                <div class="equipment-item">
                    <h4>Murasame</h4>
                    <div class="stat-line"><span class="stat-label">WP:</span> <span class="stat-value">16</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +2</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Poach Red Dragon</span></div>
                    <p style="margin-top: 10px;">Katana de alta potencia. Necesaria para Draw Out.</p>
                </div>

                <div class="equipment-item">
                    <h4>Chirijiraden</h4>
                    <div class="stat-line"><span class="stat-label">WP:</span> <span class="stat-value">18</span></div>
                    <div class="stat-line"><span class="stat-label">Element:</span> <span class="stat-value">Fire</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +3</span></div>
                    <div class="stat-line"><span class="stat-label">Status:</span> <span class="stat-value">Instant Death (on hit)</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Yardrow, sideuest con Mustadio</span></div>
                    <p style="margin-top: 10px;">La mejor katana. Su Draw Out causa muerte instantánea.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Armor - Armaduras</h3>
                
                <div class="equipment-item">
                    <h4>Genji Armor</h4>
                    <div class="stat-line"><span class="stat-label">HP:</span> <span class="stat-value">+80</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +2</span></div>
                    <div class="stat-line"><span class="stat-label">Inmune:</span> <span class="stat-value">Poison, Petrify</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Catch de Elmdore's Assassins</span></div>
                    <p style="margin-top: 10px;">Top-tier armor. Difícil de conseguir pero vale la pena.</p>
                </div>

                <div class="equipment-item">
                    <h4>Grand Armor</h4>
                    <div class="stat-line"><span class="stat-label">HP:</span> <span class="stat-value">+90</span></div>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +1</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Sal Ghidos shop (late game)</span></div>
                    <p style="margin-top: 10px;">Armadura de mayor HP. Ideal para tanks.</p>
                </div>

                <div class="equipment-item">
                    <h4>Reflect Mail</h4>
                    <div class="stat-line"><span class="stat-label">HP:</span> <span class="stat-value">+60</span></div>
                    <div class="stat-line"><span class="stat-label">Status:</span> <span class="stat-value">Auto-Reflect</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Poach Sacred o comprar en Warjilis</span></div>
                    <p style="margin-top: 10px;">Auto-Reflect permanente. Protege contra magia enemiga.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Accessories - Accesorios</h3>
                
                <div class="equipment-item">
                    <h4>Genji Glove</h4>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +2</span></div>
                    <div class="stat-line"><span class="stat-label">Habilidad:</span> <span class="stat-value">Two Swords (Dual Wield)</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Catch/Steal de Elmdore</span></div>
                    <p style="margin-top: 10px;">Permite atacar dos veces. Esencial para builds físicos.</p>
                </div>

                <div class="equipment-item">
                    <h4>Ribbon</h4>
                    <div class="stat-line"><span class="stat-label">Inmune:</span> <span class="stat-value">TODOS los status ailments</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Poach Plague, Deep Dungeon treasure</span></div>
                    <p style="margin-top: 10px;">El mejor accesorio defensivo. Inmunidad total a status.</p>
                </div>

                <div class="equipment-item">
                    <h4>Bracer</h4>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">PA +3</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Poach Behemoth</span></div>
                    <p style="margin-top: 10px;">Mayor bonus de PA de un solo item. Ideal para attackers.</p>
                </div>

                <div class="equipment-item">
                    <h4>Chantage</h4>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">MA +3</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Poach Sacred o Warjilis shop</span></div>
                    <p style="margin-top: 10px;">Mayor bonus de MA. Crítico para magos.</p>
                </div>

                <div class="equipment-item">
                    <h4>Barette</h4>
                    <div class="stat-line"><span class="stat-label">Bonus:</span> <span class="stat-value">Speed +2</span></div>
                    <div class="stat-line"><span class="stat-label">Location:</span> <span class="stat-value">Nelveska Temple sidequest</span></div>
                    <p style="margin-top: 10px;">Aumenta Speed. Muy raro. Solo disponible en WOTL iOS a través de Trapper's Den.</p>
                </div>
            </div>

            <div class="content-box">
                <h3><span class="highlight">⚠️ Items Exclusivos WOTL iOS</span></h3>
                <p style="margin-bottom: 15px;">En la versión iOS/Android de WOTL, los items que antes eran exclusivos del modo multiplayer del PSP están disponibles en <strong>Trapper's Den</strong> (tienda especial) en el late game:</p>
                
                <div class="equipment-item">
                    <h4>Trapper's Den - Items Disponibles</h4>
                    <div class="stat-line"><span class="stat-label">Rendezvous Gear:</span> <span class="stat-value">Barette, Sasuke's Blade, Nagnarock</span></div>
                    <div class="stat-line"><span class="stat-label">Melee Mode Gear:</span> <span class="stat-value">Javelin II, Glacier Gun, Blaze Gun</span></div>
                    <div class="stat-line"><span class="stat-label">Cuándo:</span> <span class="stat-value">Se desbloquea en late Chapter 4</span></div>
                    <p style="margin-top: 10px;">Estos items antes requerían conexión adhoc PSP. En iOS están disponibles en el single-player.</p>
                </div>
            </div>
