use serde::Serialize;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize)]
struct AppInfo {
    name: String,
    version: String,
    language: String,
}

#[tauri::command]
fn get_app_info() -> AppInfo {
    AppInfo {
        name: String::from("Todo List App"),
        version: String::from("0.1.0"),
        language: String::from("Rust"),
    }
}

#[derive(Serialize)]
struct Todo {
    id: u32,
    title: String,
    text: String,
    completed: bool,
}

#[tauri::command]
fn get_Todos() -> Vec<Todo> {
    vec![
        Todo{
            id: 1,
            title: String::from("Hello world !"),
            text: String::from("hello world  im reza rostami from iran guilan rasht.  im a rust learner and developer."),
            completed:true,
        },
        Todo{
            id: 2,
            title: String::from("Learning Rust "),
            text: String::from("i wanna learning rust and Developing rust programs."),
            completed:false,
        },
        Todo{
            id: 3,
            title: String::from("Learing Tauri"),
            text: String::from("i trying to learn tauri , so i wanna create desktop apps in linux and other os"),
            completed:false,
        }
    ]
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_app_info,get_Todos])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
