/*:
 *
 * @target MZ
 * @plugindesc v1.71 Allows one to have a high performance minimap for their game.
 * @Author Knight of the Celestial Developer Team.
 *
 *
 * @help
 * ============================================================================
 *
 * For any event you wish to be visible on the minimap, put into its notes at
 * the top of the event editor interface:
 *
 * <KoTC Minimap: NameOfPicture>
 *
 * It is case sensitive.
 *
 * Example: <KoTC Minimap: Goblin1>
 *
 *
 * If you want it to only be visible when it is in a certain range of the player,
 * you add a space and the range number.
 *
 * Example: <KoTC Minimap: Goblin1 10>
 *
 * Works for page comments as well, exact same format.
 * If page changes, and the new page has a minimap comment, it will
 * adapt to the new pages comment setup. If the new page has no comment,
 * the event will be removed from the minimap.
 *
 * Do not use both Event Notes, and Page Comments for this at the same
 * time on a single event, only one is needed.
 *
 * If an event is erased, it will be removed from the minimap.
 *
 *
 * >>> Plugin Commands and Script Calls <<<
 *
 *
 * Plugin Command: DisableKoTCMinimap
 * Script Call: KoTCMinimapOff();
 *
 * -Disables the minimap.
 *
 *
 * Plugin Command: EnableKoTCMinimap
 * Script Call: KoTCMinimapOn();
 *
 * -Enables the minimap.
 *
 *
 *
 * Plugin Command: KoTCMinimapFollowPlayerOn ZOOMSCALE
 * Script Call: KoTCMinimapFollowPlayerOn(ZOOMSCALE);
 *
 * -Map centers on players position, and zooms in
 * the by the specified scale. If set to 2, the zoom
 * is twice the normal level.
 *
 *
 * Plugin Command: KoTCMinimapFollowPlayerOff
 * Script Call: KoTCMinimapFollowPlayerOff();
 *
 * -Returns map to full map mode.
 *
 *
 *
 * Plugin Command: SetKoTCMinimapWallColor
 * Script Call: KoTCMinimapSetWallColor(wallcolor)
 *
 * -Sets the collision map color of the minimap.
 * -Doesnt matter if you are using the Terrain map.
 *
 * Example Plugin Command: SetKoTCMinimapWallColor red
 * Example Plugin Command: SetKoTCMinimapWallColor blue
 * Example Plugin Command: SetKoTCMinimapWallColor #FF0000
 * Example Script Call:    KoTCMinimapSetWallColor("green")
 *
 *
 * Plugin Command: SetKoTCMinimapBackgroundColor
 * Script Call: KoTCMinimapSetBackgroundColor(backgroundcolor)
 *
 * -Sets the background color of the minimap.
 * -When Terrain map is enabled, only applies to empty tiles,
 * such as the ones used for parallax.
 *
 * Example Plugin Command: SetKoTCMinimapBackgroundColor red
 * Example Plugin Command: SetKoTCMinimapBackgroundColor blue
 * Example Plugin Command: SetKoTCMinimapBackgroundColor #FF0000
 * Example Script Call:    KoTCMinimapSetBackgroundColor("yellow")
 *
 *
 * Plugin Command: SetKoTCMinimapBorderColor
 * Script Call: KoTCMinimapSetBorderColor(bordercolor)
 *
 * -Sets the border color of the minimap.
 *
 * Example Plugin Command: SetKoTCMinimapBorderColor red
 * Example Plugin Command: SetKoTCMinimapBorderColor blue
 * Example Plugin Command: SetKoTCMinimapBorderColor #FF0000
 * Example Script Call:    KoTCMinimapSetBorderColor("cyan")
 *
 *
 * Plugin Command: SetKoTCMinimapPlayerColor
 * Script Call: KoTCMinimapSetPlayerColor(playercolor)
 *
 * !Important! If you ever change the color of other things at the same time
 * as this, make sure this plugin command or script call is first in the order.
 * -Sets the player color of the minimap.
 *
 * Example Plugin Command: SetKoTCMinimapPlayerColor red
 * Example Plugin Command: SetKoTCMinimapPlayerColor blue
 * Example Plugin Command: SetKoTCMinimapPlayerColor #FF0000
 * Example Script Call:    KoTCMinimapSetPlayerColor("cyan")
 *
 *
 *
 * Plugin Command: SetKoTCMinimapSize
 * Script Call: KoTCMinimapSetSize(size)
 *
 * -Sets the scale of the minimap based on your chosen size.
 * Starts at a scale of 1, which equals 100%. If you want it twice as
 * large, you set it to 2, if you want it 50% larger, you set it to 1.5.
 *
 *
 *
 * I originally made this for my game, but I felt the community needed a more
 * up to date, auto scaling, cpu friendly minimap, so I decided to share this.
 *
 *
 *
 *
 *
 * @command DisableKoTCMinimap
 * @desc Disables the minimap until next enabled.
 * @text Disable Minimap
 *
 *
 * @command EnableKoTCMinimap
 * @desc Enable the minimap until next disabled.
 * @text Enable Minimap
 *
 *
 * @command SetKoTCMinimapWallColor
 * @desc Sets the collision map color of the minimap.
 * @text Set Collision Map Color
 *
 * @arg Color
 * @desc Example: red, blue, #00FF00
 * @text Collision Map Color
 * @default green
 * @type string
 *
 *
 * @command SetKoTCMinimapBackgroundColor
 * @desc Sets the background color of the minimap.
 * @text Set Map Background Color
 *
 * @arg Color
 * @desc Example: red, blue, #00FF00
 * @text Minimap Background Color
 * @default darkblue
 * @type string
 *
 *
 * @command SetKoTCMinimapBorderColor
 * @desc Sets the border color of the minimap.
 * @text Set Map Border Color
 *
 * @arg Color
 * @desc Example: red, blue, #00FF00
 * @text Minimap Background Color
 * @default gold
 * @type string
 *
 *
 * @command SetKoTCMinimapPlayerColor
 * @desc Sets the player color on the minimap.
 * @text Set Map Player Color
 *
 * @arg Color
 * @desc Example: red, blue, #00FF00
 * @text Minimap Player Color
 * @default gold
 * @type string
 *
 *
 *
 * @command SetKoTCMinimapSize
 * @desc Sets the scale of the minimap. 2 is double.
 * 1 is default size.
 * @text Set Map Scale
 *
 * @arg Size
 * @desc Example: 2 is double, 1.5 is 50% larger.
 * @text Minimap Scale
 * @default 2
 * @type number
 *
 *
 *
 * @command KoTCMinimapFollowPlayerOff
 * @desc Disables player follow mode if it is on.
 * @text Disable Player Follow
 *
 *
 * @command KoTCMinimapFollowPlayerOn
 * @desc Enables map follow mode on the player.
 * And zooms the map the set amount.
 * @text Enable Player Follow
 *
 *
 *
 *
 *
 *
 * @param Minimap Scale
 * @desc Change Scale of Minimap in pixels.
 * @default 150
 *
 * @param Minimap X
 * @desc Change X coordinates of Minimap's upper left corner location.
 * @default 0
 *
 * @param Minimap Y
 * @desc Change Y coordinates of Minimap's upper left corner location.
 * @default 0
 *
 *
 * @param Minimap Wall Color
 * @desc Change color of collision map on the minimap.
 * @default green
 *
 *
 * @param Player Map Indicator Color
 * @desc Change color of players indicator on the map.
 * @default green
 *
 *
 * @param Minimap Background Color
 * @desc Change color of background of minimap.
 * Example: red, yellow, or hex codes like #FF00FF.
 * @default darkblue
 *
 *
 * @param Use Default Game Border
 * @desc Uses the default game borders texture and colors if true.
 * Set to true or false
 * @default false
 * @type boolean
 * @on Enabled
 * @off Disabled
 *
 *
 * @param Minimap Border Thickness
 * @desc Change thickness of minimap custom border in pixels.
 * If using default border, effects offset of the border.
 * @default 2
 *
 * @param Minimap Border Color
 * @desc Change color of custom border of minimap.
 * Example: red, yellow, or hex codes like #FF00FF.
 * @default cyan
 *
 *
 * @param Minimap Refresh Rate
 * @desc Rate in which minimap refreshes locations of things.
 * 1000 = 1 second, 500 = half a second.
 * @default 100
 *
 *
 * @param Big Map X Position
 * @desc X Position of Big Map when it is toggled on.
 * @default 0
 *
 *
 * @param Big Map Y Position
 * @desc Y Position of Big Map when it is toggled on.
 * @default 0
 *
 * @param Big Map Scale
 * @desc How much to scale the map when big map key
 * is pressed. Scales the pixel size. 2 = double.
 * @default 2.5
 *
 * @param Big Map Hotkey
 * @desc Enlarge Map Hotkey. letter or number works.
 * Some side keys are supported like tab, alt, ctrl, enter.
 * @default M
 *
 *
 *
 * @param Player Follow Mode
 * @desc Enable to center map on player by default.
 * @default false
 * @type boolean
 * @on Enabled
 * @off Disabled
 *
 *
 * @param Follow Mode Zoom
 * @desc The scale of the zoom. 2 is double regular level.
 * 1.5 is 50% more than regular level.
 * @default 2
 *
 *
 * @param Follow Mode Hotkey
 * @desc For toggling follow mode.
 * Some side keys are supported like tab, alt, ctrl, enter.
 * @default N
 *
 *
 */
if (Utils.RPGMAKER_NAME == "MZ") {
    function KoTCMinimapWindow() {
        this.initialize(...arguments);
    }

    KoTCMinimapWindow.prototype = Object.create(Window_Base.prototype);
    KoTCMinimapWindow.prototype.constructor = KoTCMinimapWindow;
    KoTCMinimapWindow.prototype.initialize = function (rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this._time = 0;
    };

} else {
    function KoTCMinimapWindow() {
        this.initialize.apply(this, arguments);
    }

    KoTCMinimapWindow.prototype = Object.create(Window_Base.prototype)
        KoTCMinimapWindow.prototype.constructor = KoTCMinimapWindow;

    KoTCMinimapWindow.prototype.initialize = function (x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
    }

    KoTCMinimapWindow.prototype.update = function () {
        Window_Base.prototype.update.call(this);
    }

};

function KoTCMinimapStart(){
            $KoTCMinimapSystem = {
                Parameters: PluginManager.parameters('KoTC Minimap Basic')
            };
            $KoTCMinimapSystem.FollowModeOn = ($KoTCMinimapSystem.Parameters['Player Follow Mode'] !== "false");
            $KoTCMinimapSystem.PlayerFollowModeZoom = Number($KoTCMinimapSystem.Parameters['Follow Mode Zoom']);
            $KoTCMinimapSystem.PlayerFollowModeHotkey = ConvertKeyNameToCode($KoTCMinimapSystem.Parameters['Follow Mode Hotkey']);


            $KoTCMinimapSystem.BigMapOn = false;
            $KoTCMinimapSystem.BigMinimapX = Number($KoTCMinimapSystem.Parameters['Big Map X Position']);
            $KoTCMinimapSystem.BigMinimapY = Number($KoTCMinimapSystem.Parameters['Big Map Y Position']);
            $KoTCMinimapSystem.BigMapScale = Number($KoTCMinimapSystem.Parameters['Big Map Scale']);
            $KoTCMinimapSystem.BigMapHotkey = ConvertKeyNameToCode($KoTCMinimapSystem.Parameters['Big Map Hotkey']);
            $KoTCMinimapSystem.CurrentMinimapRefreshRate = Number($KoTCMinimapSystem.Parameters['Minimap Refresh Rate']);
            $KoTCMinimapSystem.CurrentMinimapBackgroundcolor = String($KoTCMinimapSystem.Parameters['Minimap Background Color']);
            $KoTCMinimapSystem.CurrentMinimapWallcolor = String($KoTCMinimapSystem.Parameters['Minimap Wall Color']);
        $KoTCMinimapSystem.UseDefaultBorder = ($KoTCMinimapSystem.Parameters['Use Default Game Border'] === "true");
        if ($KoTCMinimapSystem.UseDefaultBorder !== false) {
            $KoTCMinimapSystem.CurrentMinimapBorderThickness = Number($KoTCMinimapSystem.Parameters['Minimap Border Thickness'] * 2);

        } else {
            $KoTCMinimapSystem.CurrentMinimapBorderThickness = Number($KoTCMinimapSystem.Parameters['Minimap Border Thickness']);
            $KoTCMinimapSystem.CurrentMinimapBordercolor = String($KoTCMinimapSystem.Parameters['Minimap Border Color']);

        };
        $KoTCMinimapSystem.CurrentMinimapX = Number($KoTCMinimapSystem.Parameters['Minimap X']) + $KoTCMinimapSystem.CurrentMinimapBorderThickness;
        $KoTCMinimapSystem.CurrentMinimapY = Number($KoTCMinimapSystem.Parameters['Minimap Y']) + $KoTCMinimapSystem.CurrentMinimapBorderThickness;
            $KoTCMinimapSystem.CurrentMinimapSize = Number($KoTCMinimapSystem.Parameters['Minimap Scale']);
            var color = String($KoTCMinimapSystem.Parameters['Player Map Indicator Color']);
            if (color[0] == "#") {
                var value = hexToRgb(color)
                    var colorarray = [value.r, value.g, value.b, 1];
            } else if (typeof color == "string") {
                color = ConvertColorNameToHex(color);
                var value = hexToRgb(color)
                    var colorarray = [value.r, value.g, value.b, 1];
            } else {
                var colorarray = [color[0], color[1], color[2], 1];

            }
            $KoTCMinimapSystem.CurrentMinimapPlayerColor = colorarray

                $KoTCMinimapSystem.CurrentMapIndex = 0;
            $KoTCMinimapSystem.CurrentMinimapPlayerColor = colorarray;
            $KoTCMinimapSystem.MainMinimapSprite = new Sprite(new Bitmap($KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize));
            $KoTCMinimapSystem.SecondaryMinimapSprite = new Sprite(new Bitmap($KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize));

            // Black Background Init
            var background = new Bitmap($KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize);
            background.fillAll("black");
            $KoTCMinimapSystem.BackgroundSprite = new Sprite(background);
            $KoTCMinimapSystem.MainMinimapSprite.addChild($KoTCMinimapSystem.BackgroundSprite);
        $KoTCMinimapSystem.MainMinimapSprite.x = $KoTCMinimapSystem.CurrentMinimapX;
        $KoTCMinimapSystem.MainMinimapSprite.y = $KoTCMinimapSystem.CurrentMinimapY;
            if (Utils.RPGMAKER_NAME !== "MZ") {
                $KoTCMinimapSystem.SecondaryMinimapSprite.filters = [new PIXI.filters.VoidFilter()];
            } else {
                $KoTCMinimapSystem.SecondaryMinimapSprite.filters = [new PIXI.filters.AlphaFilter()];

            }
            $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea = new PIXI.Rectangle($KoTCMinimapSystem.CurrentMinimapX + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2), $KoTCMinimapSystem.CurrentMinimapY + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2), $KoTCMinimapSystem.CurrentMinimapSize - ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 4), $KoTCMinimapSystem.CurrentMinimapSize - ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 4));

            $KoTCMinimapSystem.MainMinimapSprite.addChild($KoTCMinimapSystem.SecondaryMinimapSprite);
            // Map Wall Sprite Init

            $KoTCMinimapSystem.MapWallSprite = new Sprite(new Bitmap($KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize));

            // Border Init
            if ($KoTCMinimapSystem.UseDefaultBorder !== true) {
                var borderx = 0 - $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                var bordery = 0 - $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                var borderwidth = $KoTCMinimapSystem.CurrentMinimapSize + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
                var borderheight = $KoTCMinimapSystem.CurrentMinimapSize + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
                $KoTCMinimapSystem.MapBorderSprite = new Bitmap(borderwidth, borderheight);
                $KoTCMinimapSystem.MapBorderSprite.fillRect(0, 0, $KoTCMinimapSystem.CurrentMinimapBorderThickness, borderheight, $KoTCMinimapSystem.CurrentMinimapBordercolor);
                $KoTCMinimapSystem.MapBorderSprite.fillRect(0 + borderwidth - $KoTCMinimapSystem.CurrentMinimapBorderThickness, 0, $KoTCMinimapSystem.CurrentMinimapBorderThickness, borderheight, $KoTCMinimapSystem.CurrentMinimapBordercolor);
                $KoTCMinimapSystem.MapBorderSprite.fillRect(0, 0, borderwidth, $KoTCMinimapSystem.CurrentMinimapBorderThickness, $KoTCMinimapSystem.CurrentMinimapBordercolor);
                $KoTCMinimapSystem.MapBorderSprite.fillRect(0, 0 + borderheight - $KoTCMinimapSystem.CurrentMinimapBorderThickness, borderwidth, $KoTCMinimapSystem.CurrentMinimapBorderThickness, $KoTCMinimapSystem.CurrentMinimapBordercolor);

                $KoTCMinimapSystem.MapBorderSprite = new Sprite($KoTCMinimapSystem.MapBorderSprite);
                $KoTCMinimapSystem.MapBorderSprite.x = 0 - $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                $KoTCMinimapSystem.MapBorderSprite.y = 0 - $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                $KoTCMinimapSystem.MainMinimapSprite.addChild($KoTCMinimapSystem.MapBorderSprite);
            }

            // Blocker Init
            var blocker = new Bitmap($KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize);
            blocker.fillAll("black");
            $KoTCMinimapSystem.BlockerSprite = new Sprite(blocker);
            $KoTCMinimapSystem.BlockerSprite.x = $KoTCMinimapSystem.CurrentMinimapBorderThickness;
            $KoTCMinimapSystem.BlockerSprite.y = $KoTCMinimapSystem.CurrentMinimapBorderThickness;

            $KoTCMinimapSystem.SecondaryMinimapSprite.addChild($KoTCMinimapSystem.MapWallSprite);

            if (Utils.RPGMAKER_NAME !== "MZ") {
                var playerbitmap = ImageManager.loadPicture("Player");
                $KoTCMinimapSystem.KoTCMinimapPlayerSprite = new Sprite(playerbitmap);
                $KoTCMinimapSystem.KoTCMinimapPlayerSprite.anchor.x = 0.5;
                $KoTCMinimapSystem.KoTCMinimapPlayerSprite.anchor.y = 0.5;
                $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setColorTone($KoTCMinimapSystem.CurrentMinimapPlayerColor);
                $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setBlendColor($KoTCMinimapSystem.CurrentMinimapPlayerColor);

            }
            if ($KoTCMinimapSystem.FollowModeOn == true) {
                KoTCMinimapFollowPlayerOn($KoTCMinimapSystem.PlayerFollowModeZoom);
            }

            $KoTCMinimapSystem.ArrayofMinimapPictureSprites = [];
            if (Utils.RPGMAKER_NAME == "MZ") {
                PluginManager.registerCommand('KoTC Minimap Basic', "DisableKoTCMinimap", data => {
                    KoTCMinimapOff();
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "EnableKoTCMinimap", data => {
                    KoTCMinimapOn();
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "SetKoTCMinimapWallColor", data => {
                    KoTCMinimapSetWallColor(data.Color);
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "SetKoTCMinimapBackgroundColor", data => {
                    KoTCMinimapSetBackgroundColor(data.Color);
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "SetKoTCMinimapPlayerColor", data => {
                    KoTCMinimapSetPlayerColor(data.Color);
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "SetKoTCMinimapBorderColor", data => {
                    KoTCMinimapSetBorderColor(data.Color);
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "SetKoTCMinimapSize", data => {
                    KoTCMinimapSetSize(data.Size);
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "KoTCMinimapFollowPlayerOn", data => {
                    KoTCMinimapFollowPlayerOn(data.ZoomScale)
                });
                PluginManager.registerCommand('KoTC Minimap Basic', "KoTCMinimapFollowPlayerOff", data => {
                    KoTCMinimapFollowPlayerOff()
                });

            } else {
                var kotcmapplugin = Game_Interpreter.prototype.pluginCommand;
                Game_Interpreter.prototype.pluginCommand = function (command, args) {
                    kotcmapplugin.call(this, command, args);
                    if (command.includes("KoTCMinimap")) {
                        switch (command) {
                        case 'DisableKoTCMinimap':
                            KoTCMinimapOff();
                            break;

                        case 'EnableKoTCMinimap':
                            KoTCMinimapOn();
                            break;

                        case 'SetKoTCMinimapWallColor':
                            KoTCMinimapSetWallColor(args[0]);
                            break;

                        case 'SetKoTCMinimapBackgroundColor':
                            KoTCMinimapSetBackgroundColor(args[0]);

                            break;

                        case 'SetKoTCMinimapBorderColor':
                            KoTCMinimapSetBorderColor(args[0]);

                            break;

                        case 'SetKoTCMinimapPlayerColor':
                            KoTCMinimapSetPlayerColor(args[0]);

                            break;

                        case 'SetKoTCMinimapSize':
                            KoTCMinimapSetSize(args[0]);

                            break;

                        case 'KoTCMinimapFollowPlayerOn':
                            KoTCMinimapFollowPlayerOn(Number(args[0]))
                            break;

                        case 'KoTCMinimapFollowPlayerOff':
                            KoTCMinimapFollowPlayerOff()
                            break;

                        default:

                        };
                    };
                };

            };

    
}

(function () {
        $KoTCMinimapSystem = {};
    var KOTCMAPTITLEBOOT = Scene_Title.prototype.initialize;
    Scene_Title.prototype.initialize = function () {
        KOTCMAPTITLEBOOT.call(this);
        KoTCMinimapStart()
    }

    
    var KOTCMAPBOOT = Scene_Boot.prototype.initialize;
    Scene_Boot.prototype.initialize = function () {
        KOTCMAPBOOT.call(this);
        KoTCMinimapStart()
    }

    var kotcmapsetupcopy = Scene_Map.prototype.createDisplayObjects;

    Scene_Map.prototype.createDisplayObjects = function () {
        kotcmapsetupcopy.call(this);
        minimappassabilitymap();
        setTimeout(() => {
            KoTCMinimapEnable();

        }, 10);

    }
        window.addEventListener('keypress', event => {
        if (event.keyCode == $KoTCMinimapSystem.BigMapHotkey) {
            if ($KoTCMinimapSystem.BigMapOn == false) {
                $KoTCMinimapSystem.DefaultXY = [Number($KoTCMinimapSystem.CurrentMinimapX), Number($KoTCMinimapSystem.CurrentMinimapY)];
                $KoTCMinimapSystem.CurrentMinimapX = $KoTCMinimapSystem.BigMinimapX + $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                $KoTCMinimapSystem.CurrentMinimapY = $KoTCMinimapSystem.BigMinimapY + $KoTCMinimapSystem.CurrentMinimapBorderThickness;
                $KoTCMinimapSystem.MainMinimapSprite.x = $KoTCMinimapSystem.CurrentMinimapX;
                $KoTCMinimapSystem.MainMinimapSprite.y = $KoTCMinimapSystem.CurrentMinimapY;
                $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.x = $KoTCMinimapSystem.CurrentMinimapX + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
                $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.y = $KoTCMinimapSystem.CurrentMinimapY + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);

                $KoTCMinimapSystem.BigMapOn = true;
                KoTCMinimapSetSize($KoTCMinimapSystem.BigMapScale);
            } else {
                $KoTCMinimapSystem.CurrentMinimapX = Number($KoTCMinimapSystem.DefaultXY[0]);
                $KoTCMinimapSystem.CurrentMinimapY = Number($KoTCMinimapSystem.DefaultXY[1]);
                $KoTCMinimapSystem.MainMinimapSprite.x = $KoTCMinimapSystem.CurrentMinimapX;
                $KoTCMinimapSystem.MainMinimapSprite.y = $KoTCMinimapSystem.CurrentMinimapY;
                $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.x = $KoTCMinimapSystem.CurrentMinimapX + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
                $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.y = $KoTCMinimapSystem.CurrentMinimapY + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);

                $KoTCMinimapSystem.BigMapOn = false;
                KoTCMinimapSetSize(1)
            };
        }
        if (event.keyCode == $KoTCMinimapSystem.PlayerFollowModeHotkey) {
            if ($KoTCMinimapSystem.FollowModeOn == false) {
                KoTCMinimapFollowPlayerOn($KoTCMinimapSystem.PlayerFollowModeZoom);
            } else {

                KoTCMinimapFollowPlayerOff();
            }
        }
    })
})();

function minimappassabilitymap() {
    $KoTCMinimapSystem.MapPassability = [];
    var width = $dataMap.width;
    var height = $dataMap.height;
    var i = 0;
    for (; i < height; i++) {
        $KoTCMinimapSystem.MapPassability[i] = [];
        var j = 0;
        for (; j < width; j++) {
            if ($gameMap.regionId(j, i) == 255 || $gameMap.terrainTag(j, i) == 7 || $gameMap.tileId(j, i, 0) > 5887 && $gameMap.tileId(j, i, 0) < 6225 || $gameMap.tileId(j, i, 0) > 6655 && $gameMap.tileId(j, i, 0) < 6993 || $gameMap.tileId(j, i, 0) > 7423 && $gameMap.tileId(j, i, 0) < 7761 || $gameMap.checkPassage(j, i, 0x0F) == false) {
                $KoTCMinimapSystem.MapPassability[i][j] = 1
            } else {
                $KoTCMinimapSystem.MapPassability[i][j] = 0
            };
        };
    };
};

KoTCMinimapEnable = function () {
    if ($gameMap && !$gamePlayer.isTransferring() && typeof KoTCMapDisabled == 'undefined') {
        if (!$KoTCMinimapSystem.MapBorderSprite && $KoTCMinimapSystem.UseDefaultBorder !== false) {
            var borderx = 0 - ($KoTCMinimapSystem.CurrentMinimapBorderThickness);
            var bordery = 0 - ($KoTCMinimapSystem.CurrentMinimapBorderThickness);
            var borderwidth = $KoTCMinimapSystem.CurrentMinimapSize + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
            var borderheight = $KoTCMinimapSystem.CurrentMinimapSize + ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 2);
            if (Utils.RPGMAKER_NAME == "MZ") {
                $KoTCMinimapSystem.MapBorderSprite = new KoTCMinimapWindow(new Rectangle(borderx, bordery, borderwidth, borderheight));

            } else {
                $KoTCMinimapSystem.MapBorderSprite = new KoTCMinimapWindow(borderx, bordery, borderwidth, borderheight);

            }
            $KoTCMinimapSystem.MainMinimapSprite.addChildAt($KoTCMinimapSystem.MapBorderSprite, 0)

        }
        if (Utils.RPGMAKER_NAME == "MZ") {
            $KoTCMinimapSystem.SecondaryMinimapSprite.removeChild($KoTCMinimapSystem.KoTCMinimapPlayerSprite);
            var playerbitmap = ImageManager.loadPicture("Player", 0);
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite = new Sprite(playerbitmap);
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.anchor.x = 0.5;
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.anchor.y = 0.5;
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setColorTone($KoTCMinimapSystem.CurrentMinimapPlayerColor);
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setBlendColor($KoTCMinimapSystem.CurrentMinimapPlayerColor);
        }
        $KoTCMinimapSystem.MainMinimapSprite.addChild($KoTCMinimapSystem.BlockerSprite)
        var minimapsize = $KoTCMinimapSystem.CurrentMinimapSize;
        var width = $KoTCMinimapSystem.CurrentMinimapSize;
        var height = $KoTCMinimapSystem.CurrentMinimapSize;

        $KoTCMinimapSystem.MapWallSprite.bitmap.fillRect(0, 0, $KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapSize, $KoTCMinimapSystem.CurrentMinimapBackgroundcolor);
        var x = 0;
        for (; x < width; x++) {
            var xtarget = Math.round(x * ($dataMap.width / minimapsize));
            var y = 0;
            if (xtarget < $dataMap.width) {
                for (; y < height; y++) {
                    var ytarget = Math.round(y * ($dataMap.height / minimapsize));
                    if (ytarget < $dataMap.height && $KoTCMinimapSystem.MapPassability[ytarget][xtarget] !== 0) {
                        $KoTCMinimapSystem.MapWallSprite.bitmap.fillRect(x, y, 1, 1, $KoTCMinimapSystem.CurrentMinimapWallcolor);
                    };
                }

            }
        };

        SceneManager._scene.addChild($KoTCMinimapSystem.MainMinimapSprite);
        $KoTCMinimapSystem.SecondaryMinimapSprite.addChildAt($KoTCMinimapSystem.KoTCMinimapPlayerSprite, $KoTCMinimapSystem.SecondaryMinimapSprite.children.length);
        $KoTCMinimapSystem.MainMinimapSprite.removeChild($KoTCMinimapSystem.BlockerSprite);
        $KoTCMinimapSystem.PlayerKoTCMinimapInterval = setInterval(function () {
            KoTCUpdateMinimapLocations()
        }, $KoTCMinimapSystem.CurrentMinimapRefreshRate);
    };
};

KoTCUpdateMinimapLocations = function () {
    if ($dataMap && !$gamePlayer.isTransferring() && SceneManager._scene instanceof Scene_Map) {
        var xmin = $KoTCMinimapSystem.CurrentMinimapX;
        var ymin = $KoTCMinimapSystem.CurrentMinimapY;
        var xmax = $KoTCMinimapSystem.CurrentMinimapX + $KoTCMinimapSystem.CurrentMinimapSize;
        var ymax = $KoTCMinimapSystem.CurrentMinimapY + $KoTCMinimapSystem.CurrentMinimapSize;
        if ($KoTCMinimapSystem.BigMapOn == false && $gamePlayer.screenX() > xmin && $gamePlayer.screenX() < xmax && $gamePlayer.screenY() > ymin && $gamePlayer.screenY() < ymax) {
            $KoTCMinimapSystem.MainMinimapSprite.opacity = 50;
        } else {
            $KoTCMinimapSystem.MainMinimapSprite.opacity = 255;
        }

        var width = $dataMap.width - 1;
        var height = $dataMap.height - 1;
        if ($KoTCMinimapSystem.FollowModeOn == true) {
            $KoTCMinimapSystem.SecondaryMinimapSprite.y = -$KoTCMinimapSystem.KoTCMinimapPlayerSprite.y * ($KoTCMinimapSystem.SecondaryMinimapSprite.scale.y) + $KoTCMinimapSystem.CurrentMinimapSize / 2;
            $KoTCMinimapSystem.SecondaryMinimapSprite.x = -$KoTCMinimapSystem.KoTCMinimapPlayerSprite.x * ($KoTCMinimapSystem.SecondaryMinimapSprite.scale.x) + $KoTCMinimapSystem.CurrentMinimapSize / 2;
        }
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.x = Math.round($gamePlayer.x / ($dataMap.width / $KoTCMinimapSystem.CurrentMinimapSize));
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.y = Math.round($gamePlayer.y / ($dataMap.height / $KoTCMinimapSystem.CurrentMinimapSize));
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.scale.x = 0.1 / ($dataMap.width / $KoTCMinimapSystem.CurrentMinimapSize);
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.scale.y = 0.1 / ($dataMap.height / $KoTCMinimapSystem.CurrentMinimapSize);
        if ($KoTCMinimapSystem.KoTCMinimapPlayerSprite.scale.x < 0.3) {
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.scale.x = 0.3;
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.scale.y = 0.3;
        }
        switch ($gamePlayer.direction()) {
        case 2:
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.rotation = 180 * Math.PI / 180;

            break;
        case 4:
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.rotation = 270 * Math.PI / 180;

            break;

        case 6:
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.rotation = 90 * Math.PI / 180;

            break;

        case 8:
            $KoTCMinimapSystem.KoTCMinimapPlayerSprite.rotation = 0 * Math.PI / 180;

            break;
        default:
        };

        $KoTCMinimapSystem.MinimapEventsLength = $gameMap.events().length;
        var eventlength = $gameMap.events().length;
        if ($gameMap && $gameMap.events() && SceneManager._scene instanceof Scene_Map) {
            var l = 0;
            for (; l < eventlength; l++) {
                var regexcode = new RegExp(/<KoTC Minimap: (\w+)\s?(\d+)?>/i);
                if (typeof $gameMap.events()[l] !== 'undefined' && typeof $dataMap.events[$gameMap.events()[l]._eventId] !== 'undefined') {
                    if (!$gameMap.events()[l]._erased) {
                        if ($gameMap.events()[l].page()) {
                            var found = 0;

                            var comment = $gameMap.events()[l].list().forEach(function (pageindex) {

                                if (pageindex.code === 108) {
                                    var comment = pageindex.parameters[0].split(' : ');
                                    if (comment[0].includes("KoTC Minimap")) {
                                        $gameMap.events()[l].KoTCMapComment = comment[0];
                                        found = 1;

                                    }
                                }
                            }, this)
                                if (found == 0) {
                                    $gameMap.events()[l].KoTCMapComment = 0;
                                };
                        };
                        var regexscan = regexcode.exec($gameMap.events()[l].event().note);
                        if (regexcode.exec($gameMap.events()[l].event().note) !== null || regexcode.exec($gameMap.events()[l].KoTCMapComment) !== null) {
                            if (RegExp.$2 !== "" && Math.round(Math.hypot($gamePlayer.x - $gameMap.events()[l].x, $gamePlayer.y - $gameMap.events()[l].y) <= RegExp.$2) || RegExp.$2 == "") {

                                if (typeof $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] == 'undefined') {
                                    var ebitmap = ImageManager.loadPicture(RegExp.$1, 0);
                                    var KoTCMapSprite = new Sprite(ebitmap);
                                    KoTCMapSprite.anchor.x = 0.5;
                                    KoTCMapSprite.anchor.y = 0.5;
                                    KoTCMapSprite.scale.x = 0.1 / (width / $KoTCMinimapSystem.CurrentMinimapSize);
                                    KoTCMapSprite.scale.y = 0.1 / (height / $KoTCMinimapSystem.CurrentMinimapSize);
                                    if (KoTCMapSprite.scale.x < 0.35) {
                                        KoTCMapSprite.scale.x = 0.35;
                                        KoTCMapSprite.scale.y = 0.35;
                                    }
                                    KoTCMapSprite.PreviousTexture = $gameMap.events()[l].characterName();
                                    KoTCMapSprite.PreviousTextureIndex = $gameMap.events()[l].characterIndex();

                                    $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] = KoTCMapSprite;
                                }
                                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].x = Math.round($gameMap.events()[l].x / (width / $KoTCMinimapSystem.CurrentMinimapSize));
                                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].y = Math.round($gameMap.events()[l].y / (height / $KoTCMinimapSystem.CurrentMinimapSize));

                                if (!$KoTCMinimapSystem.SecondaryMinimapSprite.children.includes($KoTCMinimapSystem.ArrayofMinimapPictureSprites[l])) {
                                    $KoTCMinimapSystem.SecondaryMinimapSprite.addChild($KoTCMinimapSystem.ArrayofMinimapPictureSprites[l]);
                                };
                                if ($KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].PreviousTexture !== $gameMap.events()[l].characterName() || $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].PreviousTextureIndex !== $gameMap.events()[l].characterIndex()) {
                                    $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].destroy()
                                    $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] = undefined;

                                }
                            } else if (typeof $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] !== 'undefined') {
                                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].destroy()
                                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] = undefined;
                            };

                        } else if (typeof $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] !== 'undefined') {
                            $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].destroy()
                            $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] = undefined;
                        };
                    } else if (typeof $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] !== 'undefined') {
                        $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l].destroy()
                        $KoTCMinimapSystem.ArrayofMinimapPictureSprites[l] = undefined;
                    };

                };

            };

        };
    };
};

function KoTCMinimapFollowPlayerOn(zoom) {
    $KoTCMinimapSystem.SecondaryMinimapSpriteXY = [Number($KoTCMinimapSystem.SecondaryMinimapSprite.x), Number($KoTCMinimapSystem.SecondaryMinimapSprite.y)];
    $KoTCMinimapSystem.FollowModeOn = true;
    $KoTCMinimapSystem.SecondaryMinimapSprite.scale.y = zoom;
    $KoTCMinimapSystem.SecondaryMinimapSprite.scale.x = zoom;

}

function KoTCMinimapFollowPlayerOff() {
    $KoTCMinimapSystem.FollowModeOn = false;
    $KoTCMinimapSystem.SecondaryMinimapSprite.scale.y = 1;
    $KoTCMinimapSystem.SecondaryMinimapSprite.scale.x = 1;
    $KoTCMinimapSystem.SecondaryMinimapSprite.x = $KoTCMinimapSystem.SecondaryMinimapSpriteXY[0];
    $KoTCMinimapSystem.SecondaryMinimapSprite.y = $KoTCMinimapSystem.SecondaryMinimapSpriteXY[1];

}

function KoTCMinimapSetSize(size) {
    $KoTCMinimapSystem.MainMinimapSprite.scale.x = size;
    $KoTCMinimapSystem.MainMinimapSprite.scale.y = size;
    $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.width = Math.round($KoTCMinimapSystem.CurrentMinimapSize * size) - ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 4);
    $KoTCMinimapSystem.SecondaryMinimapSprite.filterArea.height = Math.round($KoTCMinimapSystem.CurrentMinimapSize * size) - ($KoTCMinimapSystem.CurrentMinimapBorderThickness * 4);
};

function KoTCMinimapSetWallColor(wallcolor) {
    $KoTCMinimapSystem.CurrentMinimapWallcolor = wallcolor;
    KoTCMinimapEnable()
};

function KoTCMinimapSetBackgroundColor(backgroundcolor) {
    $KoTCMinimapSystem.CurrentMinimapBackgroundcolor = backgroundcolor;
    KoTCMinimapEnable()
};

function KoTCMinimapSetBorderColor(bordercolor) {
    $KoTCMinimapSystem.CurrentMinimapBordercolor = bordercolor;
    KoTCMinimapEnable()
};

KoTCMinimapOff = function () {
    if (typeof KoTCMapDisabled == 'undefined') {
        if ($KoTCMinimapSystem.MainMinimapSprite && SceneManager._scene.children.includes($KoTCMinimapSystem.MainMinimapSprite)) {
            SceneManager._scene.removeChild($KoTCMinimapSystem.MainMinimapSprite);

        };``
        clearInterval($KoTCMinimapSystem.PlayerKoTCMinimapInterval);
        $KoTCMinimapSystem.PlayerKoTCMinimapInterval = undefined;
        KoTCMapDisabled = 1;
    }
};

KoTCMinimapOn = function () {
    KoTCMapDisabled = undefined;
    KoTCMinimapEnable()
};

KoTCMinimapDisable = function () {
    if (typeof KoTCMapDisabled == 'undefined') {
        clearInterval($KoTCMinimapSystem.PlayerKoTCMinimapInterval);
        $KoTCMinimapSystem.PlayerKoTCMinimapInterval = undefined;
    };
};

//   var KOTCMAPINITALIZATION = Scene_Map.prototype.createAllWindows;
//   Scene_Map.prototype.createAllWindows = function () {
//       if (typeof KoTCMapDisabled == 'undefined') {
//           clearInterval($KoTCMinimapSystem.PlayerKoTCMinimapInterval);
//           $KoTCMinimapSystem.PlayerKoTCMinimapInterval = undefined;
//           KoTCMinimapEnable()
//       };
//       KOTCMAPINITALIZATION.call(this);
//   };

var KOTCMAPDISABLE2 = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function () {
    if (typeof KoTCMapDisabled == 'undefined') {
        SceneManager._scene.removeChild($KoTCMinimapSystem.MainMinimapSprite);
        KoTCMinimapDisable()
    };
    KOTCMAPDISABLE2.call(this);
};

var KOTCMAPDISABLE = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function () {
    if (typeof KoTCMapDisabled == 'undefined') {
        SceneManager._scene.removeChild($KoTCMinimapSystem.MainMinimapSprite);
        KoTCMinimapDisable()
    };
    KOTCMAPDISABLE.call(this);
};

if (Utils.RPGMAKER_NAME == "MZ") {
    var KOTCNAMESTART = Scene_Name.prototype.initialize;
    Scene_Name.prototype.initialize = function () {
        if (typeof KoTCMapDisabled == 'undefined') {
            SceneManager._scene.removeChild($KoTCMinimapSystem.MainMinimapSprite);
            KoTCMinimapDisable()
        };
        KOTCNAMESTART.call(this);
    }

    var KOTCBATTLESTART = Scene_Map.prototype.stop;
    Scene_Map.prototype.stop = function () {
        KOTCBATTLESTART.call(this);
        Scene_Message.prototype.stop.call(this);
        $gamePlayer.straighten();
        this._mapNameWindow.close();
        if (SceneManager.isNextScene(Scene_Battle)) {
            SceneManager._scene.removeChild($KoTCMinimapSystem.MainMinimapSprite);

        }
    };

}

var KOTCMAPTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function () {
    if ($KoTCMinimapSystem.MinimapMode == 2) {
        if ($KoTCMinimapSystem.KoTCMinimapPictureInterval) {
            clearInterval($KoTCMinimapSystem.KoTCMinimapPictureInterval);
            $KoTCMinimapSystem.KoTCMinimapPictureInterval == undefined;
        }
        SceneManager._scene.removeChild($KoTCMinimapSystem.KoTCMinimapPictureSprite);
    };
    if (Utils.RPGMAKER_NAME !== "MZ") {
        var m = 0;
        var mmmlength = $KoTCMinimapSystem.ArrayofMinimapPictureSprites.length;
        for (; m < mmmlength; m++) {
            if ($KoTCMinimapSystem.ArrayofMinimapPictureSprites[m]) {
                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[m].destroy()
                $KoTCMinimapSystem.ArrayofMinimapPictureSprites[m] = undefined;
            };
        };

    }
    KOTCMAPTransfer.call(this);
};

var KOTCMapTransferCompleted = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function () {
    KOTCMapTransferCompleted.call(this);
    KoTCMinimapEnable();
};

function KoTCMinimapSetPlayerColor(color) {
    if (color[0] == "#") {
        var value = hexToRgb(color)
            var colorarray = [value.r, value.g, value.b, 1];
    } else if (typeof color == "string") {
        color = ConvertColorNameToHex(color);
        var value = hexToRgb(color)
            var colorarray = [value.r, value.g, value.b, 1];
    } else {
        var colorarray = [color[0], color[1], color[2], 1];

    }
    $KoTCMinimapSystem.CurrentMinimapPlayerColor = colorarray
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setColorTone(colorarray)
        $KoTCMinimapSystem.KoTCMinimapPlayerSprite.setBlendColor(colorarray)
};

function ConvertColorNameToHex(name) {
    name = name.toLowerCase();
    var namearray = ["indianred", "crimson", "lightpink", "lightpink1", "lightpink2", "lightpink3", "lightpink4", "pink", "pink1", "pink2", "pink3", "pink4", "palevioletred", "palevioletred1", "palevioletred2", "palevioletred3", "palevioletred4", "lavenderblush", "lavenderblush2", "lavenderblush3", "lavenderblush4", "violetred1", "violetred2", "violetred3", "violetred4", "hotpink", "hotpink1", "hotpink2", "hotpink3", "hotpink4", "raspberry", "deeppink", "deeppink2", "deeppink3", "deeppink4", "maroon1", "maroon2", "maroon3", "mediumvioletred", "violetred", "orchid", "orchid1", "orchid2", "orchid3", "orchid4", "thistle", "thistle1", "thistle2", "thistle3", "thistle4", "plum1", "plum2", "plum3", "plum4", "plum", "violet", "magenta", "magenta2", "magenta3", "darkmagenta", "purple", "mediumorchid", "mediumorchid1", "mediumorchid2", "mediumorchid3", "mediumorchid4", "darkviolet", "darkorchid", "darkorchid1", "darkorchid2", "darkorchid3", "darkorchid4", "indigo", "blueviolet", "purple1", "purple2", "purple3", "purple4", "mediumpurple", "mediumpurple1", "mediumpurple2", "mediumpurple3", "mediumpurple4", "darkslateblue", "lightslateblue", "mediumslateblue", "slateblue", "slateblue1", "slateblue2", "slateblue3", "slateblue4", "ghostwhite", "lavender", "blue", "blue2", "mediumblue", "darkblue", "navy", "midnightblue", "cobalt", "royalblue", "royalblue1", "royalblue2", "royalblue3", "royalblue4", "cornflowerblue", "lightsteelblue", "lightsteelblue1", "lightsteelblue2", "lightsteelblue3", "lightsteelblue4", "lightslategray", "slategray", "slategray1", "slategray2", "slategray3", "slategray4", "dodgerblue", "dodgerblue2", "dodgerblue3", "dodgerblue4", "aliceblue", "steelblue", "steelblue1", "steelblue2", "steelblue3", "steelblue4", "lightskyblue", "lightskyblue1", "lightskyblue2", "lightskyblue3", "lightskyblue4", "skyblue1", "skyblue2", "skyblue3", "skyblue4", "skyblue", "deepskyblue", "deepskyblue2", "deepskyblue3", "deepskyblue4", "peacock", "lightblue", "lightblue1", "lightblue2", "lightblue3", "lightblue4", "powderblue", "cadetblue1", "cadetblue2", "cadetblue3", "cadetblue4", "turquoise1", "turquoise2", "turquoise3", "turquoise4", "cadetblue", "darkturquoise", "azure", "azure2", "azure3", "azure4", "lightcyan", "lightcyan2", "lightcyan3", "lightcyan4", "paleturquoise1", "paleturquoise", "paleturquoise3", "paleturquoise4", "darkslategray", "darkslategray1", "darkslategray2", "darkslategray3", "darkslategray4", "cyan", "cyan2", "cyan3", "darkcyan", "teal", "mediumturquoise", "lightseagreen", "manganeseblue", "turquoise", "coldgrey", "turquoiseblue", "aquamarine", "aquamarine2", "mediumaquamarine", "aquamarine4", "mediumspringgreen", "mintcream", "springgreen", "springgreen1", "springgreen2", "springgreen3", "mediumseagreen", "seagreen1", "seagreen2", "seagreen3", "seagreen", "emeraldgreen", "mint", "cobaltgreen", "honeydew", "honeydew2", "honeydew3", "honeydew4", "darkseagreen", "darkseagreen1", "darkseagreen2", "darkseagreen3", "darkseagreen4", "palegreen", "palegreen1", "lightgreen", "palegreen3", "palegreen4", "limegreen", "forestgreen", "lime", "green2", "green3", "green4", "green", "darkgreen", "sapgreen", "lawngreen", "chartreuse", "chartreuse2", "chartreuse3", "chartreuse4", "greenyellow", "darkolivegreen1", "darkolivegreen2", "darkolivegreen3", "darkolivegreen4", "darkolivegreen", "olivedrab", "olivedrab1", "olivedrab2", "yellowgreen", "olivedrab4", "ivory", "ivory2", "ivory3", "ivory4", "beige", "lightyellow", "lightyellow2", "lightyellow3", "lightyellow4", "lightgoldenrodyellow", "yellow", "yellow2", "yellow3", "yellow4", "warmgrey", "olive", "darkkhaki", "khaki1", "khaki2", "khaki3", "khaki4", "khaki", "palegoldenrod", "lemonchiffon", "lemonchiffon2", "lemonchiffon3", "lemonchiffon4", "lightgoldenrod1", "lightgoldenrod2", "lightgoldenrod3", "lightgoldenrod4", "banana", "gold", "gold2", "gold3", "gold4", "cornsilk", "cornsilk2", "cornsilk3", "cornsilk4", "goldenrod", "goldenrod1", "goldenrod2", "goldenrod3", "goldenrod4", "darkgoldenrod", "darkgoldenrod1", "darkgoldenrod2", "darkgoldenrod3", "darkgoldenrod4", "orange", "orange2", "orange3", "orange4", "floralwhite", "oldlace", "wheat", "wheat1", "wheat2", "wheat3", "wheat4", "moccasin", "papayawhip", "blanchedalmond", "navajowhite", "navajowhite2", "navajowhite3", "navajowhite4", "eggshell", "tan", "brick", "cadmiumyellow", "antiquewhite", "antiquewhite1", "antiquewhite2", "antiquewhite3", "antiquewhite4", "burlywood", "burlywood1", "burlywood2", "burlywood3", "burlywood4", "bisque", "bisque2", "bisque3", "bisque4", "melon", "carrot", "darkorange", "darkorange1", "darkorange2", "darkorange3", "darkorange4", "orange", "tan1", "tan2", "peru", "tan4", "linen", "peachpuff", "peachpuff2", "peachpuff3", "peachpuff4", "seashell", "seashell2", "seashell3", "seashell4", "sandybrown", "rawsienna", "chocolate", "chocolate1", "chocolate2", "chocolate3", "saddlebrown", "ivoryblack", "flesh", "cadmiumorange", "burntsienna", "sienna", "sienna1", "sienna2", "sienna3", "sienna4", "lightsalmon", "lightsalmon2", "lightsalmon3", "lightsalmon4", "coral", "orangered", "orangered2", "orangered3", "orangered4", "sepia", "darksalmon", "salmon1", "salmon2", "salmon3", "salmon4", "coral1", "coral2", "coral3", "coral4", "burntumber", "tomato", "tomato2", "tomato3", "tomato4", "salmon", "mistyrose", "mistyrose2", "mistyrose3", "mistyrose4", "snow", "snow2", "snow3", "snow4", "rosybrown", "rosybrown1", "rosybrown2", "rosybrown3", "rosybrown4", "lightcoral", "indianred", "indianred1", "indianred2", "indianred4", "indianred3", "brown", "brown1", "brown2", "brown3", "brown4", "firebrick", "firebrick1", "firebrick2", "firebrick3", "firebrick4", "red", "red2", "red3", "darkred", "maroon", "sgibeet", "sgislateblue", "sgilightblue", "sgiteal", "sgichartreuse", "sgiolivedrab", "sgibrightgray", "sgisalmon", "sgidarkgray", "sgigray12", "sgigray16", "sgigray32", "sgigray36", "sgigray52", "sgigray56", "sgilightgray", "sgigray72", "sgigray76", "sgigray92", "sgigray96", "white", "whitesmoke96", "gainsboro", "lightgrey", "silver", "darkgray", "gray", "dimgray", "black", "gray99", "gray98", "gray97", "whitesmoke", "gray95", "gray94", "gray93", "gray92", "gray91", "gray90", "gray89", "gray88", "gray87", "gray86", "gray85", "gray84", "gray83", "gray82", "gray81", "gray80", "gray79", "gray78", "gray77", "gray76", "gray75", "gray74", "gray73", "gray72", "gray71", "gray70", "gray69", "gray68", "gray67", "gray66", "gray65", "gray64", "gray63", "gray62", "gray61", "gray60", "gray59", "gray58", "gray57", "gray56", "gray55", "gray54", "gray53", "gray52", "gray51", "gray50", "gray49", "gray48", "gray47", "gray46", "gray45", "gray44", "gray43", "gray42", "dimgray", "gray40", "gray39", "gray38", "gray37", "gray36", "gray35", "gray34", "gray33", "gray32", "gray31", "gray30", "gray29", "gray28", "gray27", "gray26", "gray25", "gray24", "gray23", "gray22", "gray21", "gray20", "gray19", "gray18", "gray17", "gray16", "gray15", "gray14", "gray13", "gray12", "gray11", "gray10", "gray9", "gray8", "gray7", "gray6", "gray5", "gray4", "gray3", "gray2", "gray1"];
    var hexarray = ["#B0171F", "#DC143C", "#FFB6C1", "#FFAEB9", "#EEA2AD", "#CD8C95", "#8B5F65", "#FFC0CB", "#FFB5C5", "#EEA9B8", "#CD919E", "#8B636C", "#DB7093", "#FF82AB", "#EE799F", "#CD6889", "#8B475D", "#FFF0F5", "#EEE0E5", "#CDC1C5", "#8B8386", "#FF3E96", "#EE3A8C", "#CD3278", "#8B2252", "#FF69B4", "#FF6EB4", "#EE6AA7", "#CD6090", "#8B3A62", "#872657", "#FF1493", "#EE1289", "#CD1076", "#8B0A50", "#FF34B3", "#EE30A7", "#CD2990", "#C71585", "#D02090", "#DA70D6", "#FF83FA", "#EE7AE9", "#CD69C9", "#8B4789", "#D8BFD8", "#FFE1FF", "#EED2EE", "#CDB5CD", "#8B7B8B", "#FFBBFF", "#EEAEEE", "#CD96CD", "#8B668B", "#DDA0DD", "#EE82EE", "#FF00FF", "#EE00EE", "#CD00CD", "#8B008B", "#800080", "#BA55D3", "#E066FF", "#D15FEE", "#B452CD", "#7A378B", "#9400D3", "#9932CC", "#BF3EFF", "#B23AEE", "#9A32CD", "#68228B", "#4B0082", "#8A2BE2", "#9B30FF", "#912CEE", "#7D26CD", "#551A8B", "#9370DB", "#AB82FF", "#9F79EE", "#8968CD", "#5D478B", "#483D8B", "#8470FF", "#7B68EE", "#6A5ACD", "#836FFF", "#7A67EE", "#6959CD", "#473C8B", "#F8F8FF", "#E6E6FA", "#0000FF", "#0000EE", "#0000CD", "#00008B", "#000080", "#191970", "#3D59AB", "#4169E1", "#4876FF", "#436EEE", "#3A5FCD", "#27408B", "#6495ED", "#B0C4DE", "#CAE1FF", "#BCD2EE", "#A2B5CD", "#6E7B8B", "#778899", "#708090", "#C6E2FF", "#B9D3EE", "#9FB6CD", "#6C7B8B", "#1E90FF", "#1C86EE", "#1874CD", "#104E8B", "#F0F8FF", "#4682B4", "#63B8FF", "#5CACEE", "#4F94CD", "#36648B", "#87CEFA", "#B0E2FF", "#A4D3EE", "#8DB6CD", "#607B8B", "#87CEFF", "#7EC0EE", "#6CA6CD", "#4A708B", "#87CEEB", "#00BFFF", "#00B2EE", "#009ACD", "#00688B", "#33A1C9", "#ADD8E6", "#BFEFFF", "#B2DFEE", "#9AC0CD", "#68838B", "#B0E0E6", "#98F5FF", "#8EE5EE", "#7AC5CD", "#53868B", "#00F5FF", "#00E5EE", "#00C5CD", "#00868B", "#5F9EA0", "#00CED1", "#F0FFFF", "#E0EEEE", "#C1CDCD", "#838B8B", "#E0FFFF", "#D1EEEE", "#B4CDCD", "#7A8B8B", "#BBFFFF", "#AEEEEE", "#96CDCD", "#668B8B", "#2F4F4F", "#97FFFF", "#8DEEEE", "#79CDCD", "#528B8B", "#00FFFF", "#00EEEE", "#00CDCD", "#008B8B", "#008080", "#48D1CC", "#20B2AA", "#03A89E", "#40E0D0", "#808A87", "#00C78C", "#7FFFD4", "#76EEC6", "#66CDAA", "#458B74", "#00FA9A", "#F5FFFA", "#00FF7F", "#00EE76", "#00CD66", "#008B45", "#3CB371", "#54FF9F", "#4EEE94", "#43CD80", "#2E8B57", "#00C957", "#BDFCC9", "#3D9140", "#F0FFF0", "#E0EEE0", "#C1CDC1", "#838B83", "#8FBC8F", "#C1FFC1", "#B4EEB4", "#9BCD9B", "#698B69", "#98FB98", "#9AFF9A", "#90EE90", "#7CCD7C", "#548B54", "#32CD32", "#228B22", "#00FF00", "#00EE00", "#00CD00", "#008B00", "#008000", "#006400", "#308014", "#7CFC00", "#7FFF00", "#76EE00", "#66CD00", "#458B00", "#ADFF2F", "#CAFF70", "#BCEE68", "#A2CD5A", "#6E8B3D", "#556B2F", "#6B8E23", "#C0FF3E", "#B3EE3A", "#9ACD32", "#698B22", "#FFFFF0", "#EEEEE0", "#CDCDC1", "#8B8B83", "#F5F5DC", "#FFFFE0", "#EEEED1", "#CDCDB4", "#8B8B7A", "#FAFAD2", "#FFFF00", "#EEEE00", "#CDCD00", "#8B8B00", "#808069", "#808000", "#BDB76B", "#FFF68F", "#EEE685", "#CDC673", "#8B864E", "#F0E68C", "#EEE8AA", "#FFFACD", "#EEE9BF", "#CDC9A5", "#8B8970", "#FFEC8B", "#EEDC82", "#CDBE70", "#8B814C", "#E3CF57", "#FFD700", "#EEC900", "#CDAD00", "#8B7500", "#FFF8DC", "#EEE8CD", "#CDC8B1", "#8B8878", "#DAA520", "#FFC125", "#EEB422", "#CD9B1D", "#8B6914", "#B8860B", "#FFB90F", "#EEAD0E", "#CD950C", "#8B6508", "#FFA500", "#EE9A00", "#CD8500", "#8B5A00", "#FFFAF0", "#FDF5E6", "#F5DEB3", "#FFE7BA", "#EED8AE", "#CDBA96", "#8B7E66", "#FFE4B5", "#FFEFD5", "#FFEBCD", "#FFDEAD", "#EECFA1", "#CDB38B", "#8B795E", "#FCE6C9", "#D2B48C", "#9C661F", "#FF9912", "#FAEBD7", "#FFEFDB", "#EEDFCC", "#CDC0B0", "#8B8378", "#DEB887", "#FFD39B", "#EEC591", "#CDAA7D", "#8B7355", "#FFE4C4", "#EED5B7", "#CDB79E", "#8B7D6B", "#E3A869", "#ED9121", "#FF8C00", "#FF7F00", "#EE7600", "#CD6600", "#8B4500", "#FF8000", "#FFA54F", "#EE9A49", "#CD853F", "#8B5A2B", "#FAF0E6", "#FFDAB9", "#EECBAD", "#CDAF95", "#8B7765", "#FFF5EE", "#EEE5DE", "#CDC5BF", "#8B8682", "#F4A460", "#C76114", "#D2691E", "#FF7F24", "#EE7621", "#CD661D", "#8B4513", "#292421", "#FF7D40", "#FF6103", "#8A360F", "#A0522D", "#FF8247", "#EE7942", "#CD6839", "#8B4726", "#FFA07A", "#EE9572", "#CD8162", "#8B5742", "#FF7F50", "#FF4500", "#EE4000", "#CD3700", "#8B2500", "#5E2612", "#E9967A", "#FF8C69", "#EE8262", "#CD7054", "#8B4C39", "#FF7256", "#EE6A50", "#CD5B45", "#8B3E2F", "#8A3324", "#FF6347", "#EE5C42", "#CD4F39", "#8B3626", "#FA8072", "#FFE4E1", "#EED5D2", "#CDB7B5", "#8B7D7B", "#FFFAFA", "#EEE9E9", "#CDC9C9", "#8B8989", "#BC8F8F", "#FFC1C1", "#EEB4B4", "#CD9B9B", "#8B6969", "#F08080", "#CD5C5C", "#FF6A6A", "#EE6363", "#8B3A3A", "#CD5555", "#A52A2A", "#FF4040", "#EE3B3B", "#CD3333", "#8B2323", "#B22222", "#FF3030", "#EE2C2C", "#CD2626", "#8B1A1A", "#FF0000", "#EE0000", "#CD0000", "#8B0000", "#800000", "#8E388E", "#7171C6", "#7D9EC0", "#388E8E", "#71C671", "#8E8E38", "#C5C1AA", "#C67171", "#555555", "#1E1E1E", "#282828", "#515151", "#5B5B5B", "#848484", "#8E8E8E", "#AAAAAA", "#B7B7B7", "#C1C1C1", "#EAEAEA", "#F4F4F4", "#FFFFFF", "#F5F5F5", "#DCDCDC", "#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#000000", "#FCFCFC", "#FAFAFA", "#F7F7F7", "#F5F5F5", "#F2F2F2", "#F0F0F0", "#EDEDED", "#EBEBEB", "#E8E8E8", "#E5E5E5", "#E3E3E3", "#E0E0E0", "#DEDEDE", "#DBDBDB", "#D9D9D9", "#D6D6D6", "#D4D4D4", "#D1D1D1", "#CFCFCF", "#CCCCCC", "#C9C9C9", "#C7C7C7", "#C4C4C4", "#C2C2C2", "#BFBFBF", "#BDBDBD", "#BABABA", "#B8B8B8", "#B5B5B5", "#B3B3B3", "#B0B0B0", "#ADADAD", "#ABABAB", "#A8A8A8", "#A6A6A6", "#A3A3A3", "#A1A1A1", "#9E9E9E", "#9C9C9C", "#999999", "#969696", "#949494", "#919191", "#8F8F8F", "#8C8C8C", "#8A8A8A", "#878787", "#858585", "#828282", "#7F7F7F", "#7D7D7D", "#7A7A7A", "#787878", "#757575", "#737373", "#707070", "#6E6E6E", "#6B6B6B", "#696969", "#666666", "#636363", "#616161", "#5E5E5E", "#5C5C5C", "#595959", "#575757", "#545454", "#525252", "#4F4F4F", "#4D4D4D", "#4A4A4A", "#474747", "#454545", "#424242", "#404040", "#3D3D3D", "#3B3B3B", "#383838", "#363636", "#333333", "#303030", "#2E2E2E", "#2B2B2B", "#292929", "#262626", "#242424", "#212121", "#1F1F1F", "#1C1C1C", "#1A1A1A", "#171717", "#141414", "#121212", "#0F0F0F", "#0D0D0D", "#0A0A0A", "#080808", "#050505", "#030303"];
    return hexarray[namearray.indexOf(name)]
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
     : null;
}

function ConvertKeyNameToCode(key) {
    var regexalphabet = new RegExp(/[A-Z]|[a-z]/)
        var codes = {
        'backspace': 8,
        'tab': 9,
        'enter': 13,
        'shift': 16,
        'ctrl': 17,
        'alt': 18,
        'pause break': 19,
        'caps lock': 20,
        'esc': 27,
        'space': 32,
        'page up': 33,
        'page down': 34,
        'end': 35,
        'home': 36,
        'left': 37,
        'up': 38,
        'right': 39,
        'down': 40,
        'insert': 45,
        'delete': 46,
        'command': 91,
        'left command': 91,
        'right command': 93,
        'numpad *': 106,
        'numpad +': 107,
        'numpad -': 109,
        'numpad .': 110,
        'numpad /': 111,
        'num lock': 144,
        'scroll lock': 145,
        'my computer': 182,
        'my calculator': 183,
        ';': 186,
        '=': 187,
        ',': 188,
        '-': 189,
        '.': 190,
        '/': 191,
        '`': 192,
        '[': 219,
        '\\': 220,
        ']': 221,
        "'": 222
    };
    if (regexalphabet !== null && key.length == 1) {
        return key.toLowerCase().charCodeAt()
    } else {
        return codes[key.toLowerCase()];

    }
}
