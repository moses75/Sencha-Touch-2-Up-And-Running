/*
 * File: app/controller/TaskController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ToDoList.controller.TaskController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            createTaskButton: 'button[action=createTask]',
            deleteTaskButton: 'button[action=deleteTask]',
            saveTaskButton: 'button[action=saveTask]',
            navigationView: 'navigationview',
            taskList: '#taskList',
            taskCountBar: '#taskList > toolbar'
        },

        control: {
            "saveTaskButton": {
                tap: 'saveTask'
            },
            "deleteTaskButton": {
                tap: 'deleteTask'
            },
            "list": {
                itemsingletap: 'showTask',
                itemswipe: 'deleteTaskSwipe',
                disclose: 'changeDoneStatus'
            },
            "createTaskButton": {
                tap: 'createTask'
            }
        }
    },

    saveTask: function(button, e, options) {
        var store = this.getTaskList().getStore();
        var task = this.getTaskForm().getRecord();
        this.getTaskForm().updateRecord(task);

        // Is it a new object?
        if (null === store.findRecord("id", task.get('id'))) {
            store.add(task);
        }

        this.showList();

    },

    deleteTask: function(button, e, options) {
        Ext.Msg.confirm('Delete this task?', 'You cannot undo this!', function (answer) {
            if (answer === 'yes') {
                var task = this.getTaskForm().getRecord();
                var store = this.getTaskList().getStore();
                store.remove(task);
                this.showList();
            }
        }, this);

    },

    showTask: function(dataview, index, target, record, e, options) {
        this.getTaskForm().setRecord(record);
        this.getDeleteTaskButton().setHidden(false);
        this.showForm();

        var delayedTask = Ext.create('Ext.util.DelayedTask', function() {
            dataview.deselect(index);
        });
        delayedTask.delay(500);
    },

    deleteTaskSwipe: function(dataview, index, target, record, e, options) {
        var title = 'Delete the task "' + record.get('title') + '"?';
        Ext.Msg.confirm(title, 'You cannot undo this!', function (answer) {
            if (answer === 'yes') {
                var store = this.getTaskList().getStore();
                store.remove(record);
                this.updateTaskCount();
            }
        }, this);
    },

    changeDoneStatus: function(list, record, target, index, e, options) {
        var done = record.get('completed');
        record.set('completed', !done);
    },

    createTask: function(button, e, options) {
        var task = Ext.create('ToDoList.model.Task', {
            title: 'New task',
            description: '',
            completed: false,
            dueDate: new Date()
        });
        this.getTaskForm().setRecord(task);
        this.getDeleteTaskButton().setHidden(true);
        this.showForm();
    },

    launch: function() {
        this.updateTaskCount();
    },

    updateTaskCount: function() {
        var store = this.getTaskList().getStore();
        var count = store.getCount();
        this.getTaskCountBar().setTitle(count + ' tasks');
    },

    getTaskForm: function() {
        if (!this.taskForm) {
            this.taskForm = Ext.create('ToDoList.view.TaskForm');
        }
        return this.taskForm;
    },

    showForm: function() {
        this.getNavigationView().push(this.getTaskForm());
    },

    showList: function() {
        this.updateTaskCount();
        this.getNavigationView().pop();
    }

});