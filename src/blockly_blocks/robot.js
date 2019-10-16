Blockly.Blocks['inicializar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicializar Robot");
    this.setNextStatement(true, null);
    this.setColour('#BC0606');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['inicializar'] = function(block) {
  var code = 'import robot\n\n';
  return code;
};

Blockly.Blocks['derecha'] = {
  init: function() {
    this.appendValueInput("derecha")
        .setCheck("Number")
        .appendField("Derecha");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#BC0606');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['derecha'] = function(block) {
  var value_derecha = Blockly.Python.valueToCode(block, 'derecha', Blockly.Python.ORDER_ATOMIC);
  var code = `robot.derecha(${value_derecha})\n`;
  return code;
};

Blockly.Blocks['izquierda'] = {
  init: function() {
    this.appendValueInput("izquierda")
        .setCheck("Number")
        .appendField("Izquierda");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#BC0606');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['izquierda'] = function(block) {
  var value_izquierda = Blockly.Python.valueToCode(block, 'izquierda', Blockly.Python.ORDER_ATOMIC);
  var code = `robot.izquierda(${value_izquierda})\n`;
  return code;
};

Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendValueInput("avanzar")
        .setCheck("Number")
        .appendField("Avanzar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#BC0606');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['avanzar'] = function(block) {
  var value_avanzar = Blockly.Python.valueToCode(block, 'avanzar', Blockly.Python.ORDER_ATOMIC);
  var code = `robot.avanzar(${value_avanzar})\n`;
  return code;
};

Blockly.Blocks['retroceder'] = {
  init: function() {
    this.appendValueInput("retroceder")
        .setCheck("Number")
        .appendField("Retroceder");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#BC0606');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['retroceder'] = function(block) {
  var value_retroceder = Blockly.Python.valueToCode(block, 'retroceder', Blockly.Python.ORDER_ATOMIC);
  var code = `robot.retroceder(${value_retroceder})\n`;
  return code;
};
