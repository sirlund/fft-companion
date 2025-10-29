<script>
  import Button from '../ui/base/Button.svelte';
  import Badge from '../ui/base/Badge.svelte';
  import Avatar from '../ui/base/Avatar.svelte';
  import Heading from '../ui/base/Heading.svelte';
  import Label from '../ui/base/Label.svelte';
  import Notice from '../ui/Notice.svelte';
  import StatDisplay from '../ui/StatDisplay.svelte';
  import RequirementList from '../ui/RequirementList.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  let { showSection } = $props();
  let searchValue = $state('');

  // Example data
  const exampleReqs = [
    { label: 'Knight', level: 2 },
    { label: 'Archer', level: 3 }
  ];

  const exampleReqsSpecial = [
    { label: 'Squire', level: 4 },
    { label: 'Chemist', level: 2 },
    { label: 'Special Character', special: true }
  ];

  const exampleReqsGender = [
    { label: 'Dancer', level: 5 },
    { label: 'Female Only', genderLock: true, color: '#e74c3c' }
  ];
</script>

<div class="showcase">
  <div class="showcase-header">
    <Heading level={1}>Component Showcase</Heading>
    <p class="showcase-description">Biblioteca de componentes FFT Companion</p>
  </div>

  <!-- Buttons Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Buttons</Heading>

    <div class="component-group">
      <Label>Primary Buttons</Label>
      <div class="button-row">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    </div>

    <div class="component-group">
      <Label>Secondary Buttons</Label>
      <div class="button-row">
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </div>
    </div>

    <div class="component-group">
      <Label>Ghost Buttons</Label>
      <div class="button-row">
        <Button variant="ghost" size="sm">Small</Button>
        <Button variant="ghost" size="md">Medium</Button>
        <Button variant="ghost" size="lg">Large</Button>
      </div>
    </div>
  </section>

  <!-- Badges Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Badges</Heading>

    <div class="component-group">
      <Label>Badge Sizes</Label>
      <div class="badge-row">
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    </div>

    <div class="component-group">
      <Label>Badge Variants</Label>
      <div class="badge-row">
        <Badge>Default</Badge>
        <Badge variant="special">Special</Badge>
        <Badge variant="unique">Unique</Badge>
      </div>
    </div>

    <div class="component-group">
      <Label>Rating Badges</Label>
      <div class="badge-row">
        <Badge variant="rating-s">S</Badge>
        <Badge variant="rating-a">A</Badge>
        <Badge variant="rating-b">B</Badge>
        <Badge variant="rating-c">C</Badge>
        <Badge variant="rating-d">D</Badge>
      </div>
    </div>

    <div class="component-group">
      <Label>Combined Examples</Label>
      <div class="badge-row">
        <Badge size="large">Knight Lv.2</Badge>
        <Badge size="small" variant="special">WotL</Badge>
        <Badge size="small" variant="unique">Event</Badge>
      </div>
    </div>
  </section>

  <!-- Avatars Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Avatars</Heading>

    <div class="component-group">
      <Label>Avatar Sizes</Label>
      <div class="avatar-row">
        <div class="avatar-demo">
          <Avatar size="sm" src="/assets/sprites/jobs/squire_m.png" alt="Small" />
          <span class="avatar-label">Small</span>
        </div>
        <div class="avatar-demo">
          <Avatar size="md" src="/assets/sprites/jobs/squire_m.png" alt="Medium" />
          <span class="avatar-label">Medium</span>
        </div>
        <div class="avatar-demo">
          <Avatar size="lg" src="/assets/sprites/jobs/squire_m.png" alt="Large" />
          <span class="avatar-label">Large</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Headings Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Headings</Heading>

    <div class="component-group">
      <Label>Heading Levels</Label>
      <div class="heading-demo">
        <Heading level={1}>Heading Level 1</Heading>
        <Heading level={2}>Heading Level 2</Heading>
        <Heading level={3}>Heading Level 3</Heading>
        <Heading level={4}>Heading Level 4</Heading>
      </div>
    </div>

    <div class="component-group">
      <Label>Heading Variants</Label>
      <div class="heading-demo">
        <Heading level={2} variant="default">Default Heading</Heading>
        <Heading level={2} variant="tier">Tier Heading</Heading>
        <Heading level={2} variant="section">Section Heading</Heading>
      </div>
    </div>
  </section>

  <!-- Labels Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Labels</Heading>

    <div class="component-group">
      <Label>Example Label</Label>
      <Label>Requisitos</Label>
      <Label>Stats</Label>
    </div>
  </section>

  <!-- Notices Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Notices</Heading>

    <div class="component-group">
      <Notice variant="info" title="Info Notice">
        This is an informational notice with the default info variant.
      </Notice>

      <Notice variant="warning" title="Warning Notice">
        This is a warning notice to draw attention to important information.
      </Notice>

      <Notice variant="success" title="Success Notice">
        This is a success notice for positive feedback.
      </Notice>

      <Notice variant="error" title="Error Notice">
        This is an error notice for critical information.
      </Notice>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Stat Display</Heading>

    <div class="component-group">
      <Label>Example Stats</Label>
      <div class="stat-demo">
        <StatDisplay label="HP" value="120-150" rating="a" />
        <StatDisplay label="MP" value="80-100" rating="b" />
        <StatDisplay label="Speed" value="100" rating="s" />
        <StatDisplay label="PA" value="50" rating="c" />
        <StatDisplay label="MA" value="40" rating="d" />
        <StatDisplay label="Move" value="3" />
        <StatDisplay label="Jump" value="3" />
      </div>
    </div>
  </section>

  <!-- Requirements Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Requirement Lists</Heading>

    <div class="component-group">
      <Label>Basic Requirements</Label>
      <RequirementList requirements={exampleReqs} />
    </div>

    <div class="component-group">
      <Label>Special Requirements</Label>
      <RequirementList requirements={exampleReqsSpecial} />
    </div>

    <div class="component-group">
      <Label>Gender Lock Requirements</Label>
      <RequirementList requirements={exampleReqsGender} />
    </div>
  </section>

  <!-- SearchBox Section -->
  <section class="showcase-section">
    <Heading level={2} variant="section">Search Box</Heading>

    <div class="component-group">
      <SearchBox bind:value={searchValue} placeholder="Buscar trabajos..." />
      {#if searchValue}
        <p class="search-result">Search value: {searchValue}</p>
      {/if}
    </div>
  </section>

  <!-- Back Button -->
  <div class="showcase-footer">
    <Button variant="secondary" onclick={() => showSection('home')}>
      Volver al Menú
    </Button>
  </div>
</div>

<style>
  .showcase {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .showcase-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #e8dcc0 0%, #d4c4a0 50%, #c4b490 100%);
    border: 3px solid #8b6f47;
    border-radius: 4px;
    box-shadow:
      inset 0 0 0 1px #a08968,
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .showcase-description {
    color: #5a4530;
    font-size: 1.1em;
    margin-top: 10px;
  }

  .showcase-section {
    background: linear-gradient(135deg, #e8dcc0 0%, #d4c4a0 50%, #c4b490 100%);
    border: 3px solid #8b6f47;
    border-radius: 4px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow:
      inset 0 0 0 1px #a08968,
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .component-group {
    margin-bottom: 25px;
  }

  .component-group:last-child {
    margin-bottom: 0;
  }

  .button-row {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
  }

  .badge-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }

  .avatar-row {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .avatar-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .avatar-label {
    font-size: 0.85em;
    color: #5a4530;
    font-weight: bold;
  }

  .heading-demo {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .stat-demo {
    background: rgba(139, 111, 71, 0.1);
    border: 2px solid #8b6f47;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .search-result {
    margin-top: 10px;
    color: #5a4530;
    font-style: italic;
  }

  .showcase-footer {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 2px solid #8b6f47;
  }
</style>
