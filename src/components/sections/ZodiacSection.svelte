<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
</script>

<BackButton onclick={() => showSection('main-menu')} />
            <h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Zodiac Compatibility</h2>
            
            <div class="content-box">
                <h3>¿Cómo funciona Zodiac Compatibility?</h3>
                <p style="margin-bottom: 15px;">La compatibilidad zodiacal afecta el daño dado y recibido entre unidades. Es una mecánica importante pero a menudo ignorada.</p>
                
                <div class="stat-line"><span class="stat-label">Best Compatibility:</span> <span class="stat-value">Daño × 1.25 (dado y recibido)</span></div>
                <div class="stat-line"><span class="stat-label">Good Compatibility:</span> <span class="stat-value">Daño × 1.125</span></div>
                <div class="stat-line"><span class="stat-label">Neutral:</span> <span class="stat-value">Daño × 1.0 (normal)</span></div>
                <div class="stat-line"><span class="stat-label">Bad Compatibility:</span> <span class="stat-value">Daño × 0.875</span></div>
                <div class="stat-line"><span class="stat-label">Worst Compatibility:</span> <span class="stat-value">Daño × 0.5 (mitad de daño)</span></div>
                
                <p style="margin-top: 15px;">⚠️ <strong>Importante:</strong> La compatibilidad funciona en AMBAS direcciones. Si tienes Best compatibility con un enemigo, haces MÁS daño pero también RECIBES MÁS daño de ese enemigo.</p>
            </div>

            <div class="content-box">
                <h3>Tabla de Compatibilidad</h3>
                
                <table>
                    <thead>
                        <tr>
                            <th>Tu Signo</th>
                            <th>Best</th>
                            <th>Good</th>
                            <th>Bad</th>
                            <th>Worst</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aries ♈</td>
                            <td>Leo, Sagittarius</td>
                            <td>Gemini, Aquarius, Aries</td>
                            <td>Pisces, Taurus</td>
                            <td>Cancer, Capricorn</td>
                        </tr>
                        <tr>
                            <td>Taurus ♉</td>
                            <td>Virgo, Capricorn</td>
                            <td>Cancer, Pisces, Taurus</td>
                            <td>Aries, Gemini</td>
                            <td>Leo, Aquarius</td>
                        </tr>
                        <tr>
                            <td>Gemini ♊</td>
                            <td>Libra, Aquarius</td>
                            <td>Leo, Aries, Gemini</td>
                            <td>Taurus, Cancer</td>
                            <td>Virgo, Pisces</td>
                        </tr>
                        <tr>
                            <td>Cancer ♋</td>
                            <td>Scorpio, Pisces</td>
                            <td>Virgo, Taurus, Cancer</td>
                            <td>Gemini, Leo</td>
                            <td>Aries, Libra</td>
                        </tr>
                        <tr>
                            <td>Leo ♌</td>
                            <td>Sagittarius, Aries</td>
                            <td>Gemini, Libra, Leo</td>
                            <td>Cancer, Virgo</td>
                            <td>Capricorn, Taurus</td>
                        </tr>
                        <tr>
                            <td>Virgo ♍</td>
                            <td>Capricorn, Taurus</td>
                            <td>Scorpio, Cancer, Virgo</td>
                            <td>Leo, Libra</td>
                            <td>Sagittarius, Gemini</td>
                        </tr>
                        <tr>
                            <td>Libra ♎</td>
                            <td>Aquarius, Gemini</td>
                            <td>Sagittarius, Leo, Libra</td>
                            <td>Virgo, Scorpio</td>
                            <td>Pisces, Cancer</td>
                        </tr>
                        <tr>
                            <td>Scorpio ♏</td>
                            <td>Pisces, Cancer</td>
                            <td>Capricorn, Virgo, Scorpio</td>
                            <td>Libra, Sagittarius</td>
                            <td>Aries, Leo</td>
                        </tr>
                        <tr>
                            <td>Sagittarius ♐</td>
                            <td>Aries, Leo</td>
                            <td>Libra, Aquarius, Sagittarius</td>
                            <td>Scorpio, Capricorn</td>
                            <td>Taurus, Virgo</td>
                        </tr>
                        <tr>
                            <td>Capricorn ♑</td>
                            <td>Taurus, Virgo</td>
                            <td>Scorpio, Pisces, Capricorn</td>
                            <td>Sagittarius, Aquarius</td>
                            <td>Gemini, Aries</td>
                        </tr>
                        <tr>
                            <td>Aquarius ♒</td>
                            <td>Gemini, Libra</td>
                            <td>Aries, Sagittarius, Aquarius</td>
                            <td>Capricorn, Pisces</td>
                            <td>Cancer, Taurus</td>
                        </tr>
                        <tr>
                            <td>Pisces ♓</td>
                            <td>Cancer, Scorpio</td>
                            <td>Taurus, Capricorn, Pisces</td>
                            <td>Aquarius, Aries</td>
                            <td>Leo, Libra</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="content-box">
                <h3>Signos Recomendados para Ramza</h3>
                <p style="margin-bottom: 15px;">Elegir el signo correcto para Ramza puede hacer una diferencia significativa en las batallas más difíciles del juego:</p>
                
                <div class="job-item">
                    <h4>⭐ Aries (Recomendado #1)</h4>
                    <div class="stat-line"><span class="stat-label">Best con:</span> <span class="stat-value">Leo, Sagittarius</span></div>
                    <div class="stat-line"><span class="stat-label">Worst con:</span> <span class="stat-value">Cancer, Capricorn</span></div>
                    <p style="margin-top: 10px;"><strong>Por qué es bueno:</strong> Belias (Aries Lucavi) es weak contra Aries Ramza. Riovanes rooftop battle es más fácil. No tiene Worst compatibility con ningún personaje único importante.</p>
                </div>

                <div class="job-item">
                    <h4>⭐ Gemini</h4>
                    <div class="stat-line"><span class="stat-label">Best con:</span> <span class="stat-value">Libra, Aquarius</span></div>
                    <div class="stat-line"><span class="stat-label">Worst con:</span> <span class="stat-value">Virgo, Pisces</span></div>
                    <p style="margin-top: 10px;">Balanceado. Buena compatibilidad general.</p>
                </div>

                <div class="job-item">
                    <h4>⭐ Leo</h4>
                    <div class="stat-line"><span class="stat-label">Best con:</span> <span class="stat-value">Sagittarius, Aries</span></div>
                    <div class="stat-line"><span class="stat-label">Worst con:</span> <span class="stat-value">Capricorn, Taurus</span></div>
                    <p style="margin-top: 10px;">Excelente con Agrias (Virgo) y Orlandeau (Scorpio). Malo contra Wiegraf (Capricorn).</p>
                </div>

                <div class="job-item">
                    <h4>⭐ Pisces</h4>
                    <div class="stat-line"><span class="stat-label">Best con:</span> <span class="stat-value">Cancer, Scorpio</span></div>
                    <div class="stat-line"><span class="stat-label">Worst con:</span> <span class="stat-value">Leo, Libra</span></div>
                    <p style="margin-top: 10px;">Bueno para magic builds. Compatible con healers.</p>
                </div>

                <div class="job-item">
                    <h4>❌ Evitar: Capricorn y Taurus</h4>
                    <p style="margin-top: 10px;"><strong>Por qué:</strong> Tienen Worst compatibility con bosses importantes. Wiegraf (Capricorn) es mucho más difícil con estos signos. Las batallas críticas de Chapter 3-4 se vuelven extremadamente complicadas.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Signos de Bosses y Personajes Importantes</h3>
                
                <table>
                    <thead>
                        <tr>
                            <th>Personaje/Boss</th>
                            <th>Signo</th>
                            <th>Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wiegraf</td>
                            <td>Capricorn ♑</td>
                            <td>Batalla 1v1 crítica en Riovanes</td>
                        </tr>
                        <tr>
                            <td>Agrias</td>
                            <td>Virgo ♍</td>
                            <td>Personaje permanente</td>
                        </tr>
                        <tr>
                            <td>Orlandeau (TG Cid)</td>
                            <td>Scorpio ♏</td>
                            <td>Best character del juego</td>
                        </tr>
                        <tr>
                            <td>Delita</td>
                            <td>Aries ♈</td>
                            <td>Aparece en varias batallas story</td>
                        </tr>
                        <tr>
                            <td>Belias (Lucavi)</td>
                            <td>Aries ♈</td>
                            <td>Boss de Riovanes rooftop</td>
                        </tr>
                        <tr>
                            <td>Elmdore</td>
                            <td>Leo ♌</td>
                            <td>Boss de Limberry Castle</td>
                        </tr>
                        <tr>
                            <td>Mustadio</td>
                            <td>Libra ♎</td>
                            <td>Personaje permanente</td>
                        </tr>
                        <tr>
                            <td>Cloud</td>
                            <td>Leo ♌</td>
                            <td>Personaje secreto opcional</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="content-box">
                <h3>Tips Prácticos</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li style="margin: 10px 0;">La compatibilidad zodiacal se puede ignorar en la mayoría del juego, pero es CRÍTICA en batallas difíciles como Riovanes y Limberry</li>
                    <li style="margin: 10px 0;">Cuando reclutes generics, intenta que tu healer tenga Good/Best compatibility con tu party principal</li>
                    <li style="margin: 10px 0;">Worst compatibility puede reducir tu daño a la MITAD - puede hacer imposibles algunas batallas</li>
                    <li style="margin: 10px 0;">Usa la tabla para planear tu party composition antes de batallas difíciles</li>
                    <li style="margin: 10px 0;">En iOS, no puedes cambiar el birthdate de Ramza después de empezar - elige sabiamente al inicio</li>
                </ul>
            </div>
