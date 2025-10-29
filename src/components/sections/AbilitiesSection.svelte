<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection, searchValue = $bindable(''), onkeyup } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Abilities</h2>
            <SearchBox placeholder="Buscar habilidad..." bind:value={searchValue} {onkeyup} />
            
            <div class="content-box">
                <h3>Knight - Ruin (Break)</h3>
                
                <div class="ability-item">
                    <h4>Ruin Speed (Speed Break)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">150 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">1 (Melee)</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">-2 Speed permanente</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">PA × WP</span></div>
                    <p style="margin-top: 10px;">Reduce permanentemente la Speed del objetivo. No se puede recuperar con items.</p>
                </div>

                <div class="ability-item">
                    <h4>Ruin Power (Power Break)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">250 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">-3 PA permanente</span></div>
                    <p style="margin-top: 10px;">Reduce Physical Attack del objetivo. Excelente contra guerreros físicos.</p>
                </div>

                <div class="ability-item">
                    <h4>Ruin Mind (Mind Break)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">250 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">-3 MA permanente</span></div>
                    <p style="margin-top: 10px;">Neutraliza magos enemigos reduciendo su Magic Attack.</p>
                </div>

                <div class="ability-item">
                    <h4>Ruin Armor (Armor Break)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">400 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Destruye armadura equipada</span></div>
                    <p style="margin-top: 10px;">Elimina la armadura del enemigo. Hace vulnerables a tanks pesados.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>White Mage - White Magick</h3>
                
                <div class="ability-item">
                    <h4>Cure</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">30 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">6 MP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">4</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">3</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">MA × 5</span></div>
                    <p style="margin-top: 10px;">Curación básica single-target. Aprenderla primero.</p>
                </div>

                <div class="ability-item">
                    <h4>Cure 2 (Cura)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">200 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">10 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">4</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">MA × 10</span></div>
                    <p style="margin-top: 10px;">Curación mejorada. El doble de potencia que Cure.</p>
                </div>

                <div class="ability-item">
                    <h4>Raise</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">180 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">10 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">4</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Revive con 20% HP</span></div>
                    <p style="margin-top: 10px;">Resurrect fallen allies. No funciona si el contador llega a 0.</p>
                </div>

                <div class="ability-item">
                    <h4>Reraise</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">400 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">16 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">4</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Auto-revive al morir</span></div>
                    <p style="margin-top: 10px;">Status: Reraise. Auto-revive con 10% HP cuando el personaje muere.</p>
                </div>

                <div class="ability-item">
                    <h4>Holy</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">500 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">56 MP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">5</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">8</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Holy</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">MA × 22</span></div>
                    <p style="margin-top: 10px;">La magia ofensiva más poderosa de White Mage. Elemento Holy rara vez resistido.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Black Mage - Black Magick</h3>
                
                <div class="ability-item">
                    <h4>Fire / Fire 2 / Fire 3 / Fire 4</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">50 / 250 / 450 / 900 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">6 / 14 / 22 / 60 MP</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Fire</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">MA × (6/10/18/32)</span></div>
                    <p style="margin-top: 10px;">Serie de fuego. Fire4 (Firaja) es extremadamente potente pero costoso en MP.</p>
                </div>

                <div class="ability-item">
                    <h4>Bolt / Bolt 2 / Bolt 3 / Bolt 4</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">50 / 250 / 450 / 900 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Lightning</span></div>
                    <p style="margin-top: 10px;">Serie de rayo. Efectivo contra enemigos en agua o con armadura metálica.</p>
                </div>

                <div class="ability-item">
                    <h4>Ice / Ice 2 / Ice 3 / Ice 4</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">50 / 250 / 450 / 900 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Ice</span></div>
                    <p style="margin-top: 10px;">Serie de hielo. Tiene chance de infligir Don't Move status.</p>
                </div>

                <div class="ability-item">
                    <h4>Flare</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">600 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">60 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">10</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Ninguno</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">MA × 32</span></div>
                    <p style="margin-top: 10px;">Daño masivo sin elemento. No puede ser absorbido. Charge time largo.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Time Mage - Time Magick</h3>
                
                <div class="ability-item">
                    <h4>Haste</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">120 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">6 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">2</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Speed × 1.5</span></div>
                    <p style="margin-top: 10px;">Incrementa velocidad del objetivo. Crítico para combate.</p>
                </div>

                <div class="ability-item">
                    <h4>Slow</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">120 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">8 MP</span></div>
                    <div class="stat-line"><span class="stat-label">CT:</span> <span class="stat-value">3</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Speed × 0.5</span></div>
                    <p style="margin-top: 10px;">Reduce velocidad enemiga. Excelente para control.</p>
                </div>

                <div class="ability-item">
                    <h4>Stop</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">180 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">10 MP</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">CT = 0 (no puede actuar)</span></div>
                    <p style="margin-top: 10px;">Congela al objetivo. No puede actuar hasta que expire.</p>
                </div>

                <div class="ability-item">
                    <h4>Quick</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">350 JP</span></div>
                    <div class="stat-line"><span class="stat-label">MP Cost:</span> <span class="stat-value">20 MP</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Turno inmediato extra</span></div>
                    <p style="margin-top: 10px;">Otorga turno adicional inmediato. Muy poderoso para combos.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Monk - Martial Arts</h3>
                
                <div class="ability-item">
                    <h4>Chakra</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">200 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">Self</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Cura HP = Max HP/5 + Esuna</span></div>
                    <p style="margin-top: 10px;">Auto-curación + remove status ailments. Sin costo de MP.</p>
                </div>

                <div class="ability-item">
                    <h4>Wave Fist</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">350 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">3</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">PA × (PA/2)</span></div>
                    <p style="margin-top: 10px;">Ataque físico a distancia. Ignora evasión.</p>
                </div>

                <div class="ability-item">
                    <h4>Earth Slash</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">500 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Rango:</span> <span class="stat-value">3</span></div>
                    <div class="stat-line"><span class="stat-label">Elemento:</span> <span class="stat-value">Earth</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">PA × (PA+2)</span></div>
                    <p style="margin-top: 10px;">Ataque elemental tierra. Muy potente con alto PA.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Samurai - Iaido</h3>
                
                <div class="ability-item">
                    <h4>Muramasa (Draw Out)</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">900 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Requisito:</span> <span class="stat-value">Katana equipada</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Daño masivo + Drena HP del usuario</span></div>
                    <div class="stat-line"><span class="stat-label">Fórmula:</span> <span class="stat-value">(PA+Brave/2) × WP</span></div>
                    <p style="margin-top: 10px;">Extremadamente poderoso pero consume HP del usuario. Área de efecto.</p>
                </div>

                <div class="ability-item">
                    <h4>Chirijiraden</h4>
                    <div class="stat-line"><span class="stat-label">JP Cost:</span> <span class="stat-value">900 JP</span></div>
                    <div class="stat-line"><span class="stat-label">Requisito:</span> <span class="stat-value">Katana Chirijiraden</span></div>
                    <div class="stat-line"><span class="stat-label">Efecto:</span> <span class="stat-value">Instant Death + Fire element</span></div>
                    <p style="margin-top: 10px;">Mata instantáneamente si no es resistido. Elemento fuego.</p>
                </div>
            </div>
