<?php
// $Id: page.tpl.php,v 1.48 2010/11/20 04:03:51 webchick Exp $
?>
  <div id=wrapper>
      <header>
          <div class="header-wrap">
              <div class="header-nav"><?php print render($page['header']); ?></div>
              <?php print render($page['header_baner']); ?>
          </div>

      </header> <!-- /#header -->
    <div id=container class=clearfix>
      <?php if ($page['sidebar_first']): ?>
        <aside id=sidebar-first>
          <?php print render($page['sidebar_first']); ?>
        </aside>
      <?php endif; ?>

      <section id=center><div id=squeeze>
             

          <a id=main-content></a>
          <?php if ($tabs): ?><div id=tabs-wrapper class=clearfix><?php endif; ?>
          <?php print render($title_prefix); ?>
          <?php if ($title): ?>
            <h1<?php print $tabs ? ' class=with-tabs' : '' ?>><?php print $title ?></h1>
          <?php endif; ?>
          <?php print render($title_suffix); ?>
          <?php if ($tabs): ?><?php print render($tabs); ?></div><?php endif; ?>
          <?php print render($tabs2); ?>
          <?php print $messages; ?>
          <?php print render($page['help']); ?>
          <?php if ($action_links): ?><ul class=action-links><?php print render($action_links); ?></ul><?php endif; ?>
          <div class=clearfix>
            <?php print render($page['content']); ?>
          </div>

      </div></section> 
      <?php if ($page['sidebar_second']): ?>
        <aside id=sidebar-second>
          <?php print render($page['sidebar_second']); ?>
        </aside>
      <?php endif; ?>

    </div> <!-- /#container -->
      <?php if ($page['highlighted']): ?><div id=highlighted><?php print render($page['highlighted']); ?></div><?php endif; ?>
	<footer><?php print render($page['footer']); ?></footer>
  </div> <!-- /#wrapper -->
