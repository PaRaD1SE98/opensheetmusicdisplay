﻿export class GraphicalMarkedArea {
    constructor(systemRectangle: GraphicalRectangle, labelRectangle: GraphicalRectangle = null, label: GraphicalLabel = null, settingsLabel: GraphicalLabel = null) {
        this.systemRectangle = systemRectangle;
        this.labelRectangle = labelRectangle;
        this.label = label;
        this.settings = settingsLabel;
    }
    public systemRectangle: GraphicalRectangle;
    public labelRectangle: GraphicalRectangle;
    public label: GraphicalLabel;
    public settings: GraphicalLabel;
}