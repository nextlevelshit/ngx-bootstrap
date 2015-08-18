/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap,
  coreDirectives, formDirectives, CSSClass
} from 'angular2/angular2';

import {tooltip} from 'src/components/tooltip/tooltip';

@Component({
  selector: 'tooltip-demo'
})
@View({
  template: `
    <br>
    <hr/>
    <h2>Tooltip demo</h2>
    <div>
      <div class="form-group">
        <label>Dynamic Tooltip Text</label>
        <input type="text" [(ng-model)]="dynamicTooltipText" class="form-control">
      </div>
      <div class="form-group">
        <label>Dynamic Tooltip Popup Text</label>
        <input type="text" [(ng-model)]="dynamicTooltip" class="form-control">
      </div>
      <p>
        Pellentesque <a href="#" [tooltip]="dynamicTooltip">{{dynamicTooltipText}}</a>,
        sit amet venenatis urna cursus eget nunc scelerisque viverra mauris, in
        aliquam. Tincidunt lobortis feugiat vivamus at
        <a href="#" tooltip-placement="left" tooltip="On the Left!">left</a> eget
        arcu dictum varius duis at consectetur lorem. Vitae elementum curabitur
        <a href="#" tooltip-placement="right" tooltip="On the Right!">right</a>
        nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas
        <a href="#" tooltip-placement="bottom" tooltip="On the Bottom!">bottom</a>
        pharetra convallis posuere morbi leo urna,
        <a href="#" tooltip-animation="false" tooltip="I don't fade. :-(">fading</a>
        at elementum eu, facilisis sed odio morbi quis commodo odio. In cursus
        <a href="#" tooltip-popup-delay='1000' tooltip='appears with delay'>delayed</a> turpis massa tincidunt dui ut.
        <a href="#" tooltip-template="'myTooltipTemplate.html'">Custom template</a>
        nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas
      </p>

      <p>
          I can even contain HTML. <a href="#" tooltip-html="htmlTooltip">Check me out!</a>
      </p>

      <p>

          I can have a custom class. <a href="#" tooltip="I can have a custom class applied to me!" tooltip-class="customClass">Check me out!</a>
      </p>

      <form role="form">
        <div class="form-group">
          <label>Or use custom triggers, like focus: </label>
          <input type="text" value="Click me!" tooltip="See? Now click away..."  tooltip-trigger="focus" tooltip-placement="right" class="form-control" />
        </div>

        <div class="form-group" ng-class="{'has-error' : !inputModel}">
          <label>Disable tooltips conditionally:</label>
          <input type="text" ng-model="inputModel" class="form-control"
            placeholder="Hover over this for a tooltip until this is filled"
            tooltip="Enter something in this input field to disable this tooltip"
            tooltip-placement="top"
            tooltip-trigger="mouseenter"
            tooltip-enable="!inputModel" />
        </div>
      </form>

      <script type="text/ng-template" id="myTooltipTemplate.html">
        <span>Special Tooltip with <strong>markup</strong> and {{ dynamicTooltipText }}</span>
      </script>
  </div>`,
  directives: [tooltip, coreDirectives, formDirectives, CSSClass],
  style: `
    /* Specify styling for tooltip contents */
    .tooltip.customClass .tooltip-inner {
        color: #880000;
        background-color: #ffff66;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
    /* Hide arrow */
    .tooltip.customClass .tooltip-arrow {
        display: none;
    }
  `
})
export class TooltipDemo {
  public dynamicTooltip:string = 'Hello, World!';
  public dynamicTooltipText:string = 'dynamic';
  public htmlTooltip:string = 'I\'ve been made <b>bold</b>!';
}
